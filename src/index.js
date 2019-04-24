import React from 'react';
import { render } from 'react-dom';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunk)),
// );

render(
    // <Provider store={store} >
    <App />,
    // </Provider>,
    document.getElementById('root'),
);
