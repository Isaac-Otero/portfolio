import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import PubSub,{PubSubContext} from './pubsub';
import App from './components/App';
import './index.css';

const savedStateKey = 'REACTION_CHAT_STATE';

const loadState = () => {
    try {
        const savedState = localStorage.getItem(savedStateKey);
        return savedState ? JSON.parse(savedState) : undefined;
    } catch (error) {
        return undefined;
    }
};

const saveState = state => {
    try {
        const { messages, reactions, username } = state;
        localStorage.setItem(savedStateKey, JSON.stringify({ messages, reactions, username }));
    } catch (error) {
        // Ignore storage failures so live chat still works.
    }
};

const store = createStore(rootReducer, loadState());

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject =>{
        const{message,channel} = messageObject;
        console.log('Received Message', message, 'channel', channel);
        if (message && message.type) {
            store.dispatch(message);
        }
    }
});

pubsub.fetchHistory().then(messages => {
    messages.forEach(message => {
        if (message && message.type) {
            store.dispatch(message);
        }
    });
});

store.subscribe(() => saveState(store.getState()));

const Reaction =() =>{
    return (
        <Provider store={store}>
        <PubSubContext.Provider value={{pubsub}}>
            <App/>
        </PubSubContext.Provider>
    </Provider>  
    )
}

export default Reaction;
  
