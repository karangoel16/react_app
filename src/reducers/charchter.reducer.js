import {ADD_CHARACHTER, DEL_CHARACHTER} from "../actions/index";
import char_json from '../data/charachter.json';
function char_reducer(state=char_json,action){
    switch(action.type){
        case ADD_CHARACHTER:
            let charachter = state.filter(item => item.id !==action.id)
            return charachter;
        case DEL_CHARACHTER:
            charachter =[...state,createCharachter(action.id)]
            return charachter;
        default:return state;
    }
}

function createCharachter(id){
    let charachter = char_json.find(c => c.id===id);
    return charachter;
}

export default char_reducer;