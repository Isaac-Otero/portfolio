import { REACTION_OBJECTS } from "../actions/types";

const REACTION_TYPES = REACTION_OBJECTS.map(
    REACTION_OBJECT => REACTION_OBJECT.type
);

const reactionsReducer = (state={},action) =>{
    if(REACTION_TYPES.includes(action.type)){
        const{messageId}=action.item;

        const messageReactions = state[messageId];
        
        if(messageReactions){
            if (messageReactions.some(reaction => reaction.id === action.item.id)) {
                return state;
            }

            return {
                ...state,
                [messageId]: [
                    ...messageReactions.filter(reaction => reaction.username !== action.item.username),
                    action.item
                ]
            };
        }

        return {...state,[messageId]:[action.item]};
    }
    return state;
}

export default reactionsReducer;
