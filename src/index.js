import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers} from 'redux';
import { Provider } from 'react-redux';

//REDUCER
const name = (state=0,action) =>{
    // console.log(action.fullName);
    if(action.fullName != null){
        return action.fullName;
    }
    return state;
}

let nameReducer = combineReducers({
    name:name
});

//STORE
let store = createStore(
    nameReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//DISPATCH
// store.dispatch(increment);


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
