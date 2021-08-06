import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth.js';
import videoReducer from '../reducers/video.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    return createStore(
        combineReducers (
            {
                auth: authReducer,
                listVideo: videoReducer,
            }
        ),
       composeEnhancers(applyMiddleware (thunk)),
    )
}

export default configureStore;