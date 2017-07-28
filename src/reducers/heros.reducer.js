import char_json from '../data/charachter.json';
import {ADD_CHARACHTER} from '../actions';
import {DEL_CHARACHTER} from "../actions/index";

function heros_reducer(state=[],action)
{
    switch(action.type)
    {
        case ADD_CHARACHTER:
            let heros =[...state,createCharachter(action.id)];
            return heros;
        case DEL_CHARACHTER:
            heros = state.filter(item => item.id !== action.id);
            return heros;
        default:return state;
    }
}

function createCharachter(id){
    let charachter = char_json.find(c => c.id===id);
    return charachter;
}

export default heros_reducer;