import { GET_BUGS,GET_BUG, DELETE_BUG } from "../actions/types";
const initialState={
    bugs:[],
    bug:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_BUGS:
            return{
                ...state,
                bugs: action.payload,
            };
            case GET_BUG:
                return{
                    ...state,
                    bug: action.payload,
                }
            case DELETE_BUG:
                return{
                    ...state,
                    bugs: action.payload
                }
            default:
                return state;

    }
}