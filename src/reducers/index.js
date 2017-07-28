import {combineReducers} from 'redux';
import char_reducer from './charchter.reducer';
import heros_reducer from './heros.reducer';

const rootReducer = combineReducers({
    char_reducer,heros_reducer
})

export default rootReducer;