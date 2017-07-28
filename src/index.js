import React from 'react';
import ReactDom from 'react-dom';
import AppComponent from './component/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';



const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(()=>console.log('store',store.getState()));


ReactDom.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>
    ,document.getElementById('root'));
