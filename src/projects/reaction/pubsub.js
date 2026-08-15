import PubNub from "pubnub";
import { createContext } from "react";
import PubnubConfig from "./pubnub.config";

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

class PubSub {
    constructor(){
        this.pubnub=new PubNub(PubnubConfig);

        this.pubnub.subscribe({channels:[MESSAGE_CHANNEL]});
    }
    addListener = listenerConfig =>{
        this.pubnub.addListener(listenerConfig);
    }

    publish = message =>{
        this.pubnub.publish({message, channel: MESSAGE_CHANNEL});
    }

    fetchHistory = () => {
        return new Promise(resolve => {
            this.pubnub.history(
                { channel: MESSAGE_CHANNEL, count: 100 },
                (status, response) => {
                    if (status.error || !response || !response.messages) {
                        resolve([]);
                        return;
                    }

                    resolve(response.messages.map(message => message.entry));
                }
            );
        });
    }
}

export const PubSubContext = createContext();

export default PubSub;
