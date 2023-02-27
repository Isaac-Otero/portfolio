import { NEW_MESSAGE } from "../actions/types";

const DEFAULT_MESSAGES={items :[]};

const messagesReducer =(state=DEFAULT_MESSAGES, action) =>{
    switch(action.type){
        case NEW_MESSAGE:
            return {
                ...state,
                //return array of all previous items, return the new item also
                items:[...state.items,action.item]
            };
        default:
            return state;
    }
}

export default messagesReducer;