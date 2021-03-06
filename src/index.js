import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            <Provider store={store}>
                {/*<App store={store} state={state} dispatch={store.dispatch.bind(store)}/>*/}
                <App/>

            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


/*let rerenderEntireTree = (state) => {
}

rerenderEntireTree(store.getState());*/

/*store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
