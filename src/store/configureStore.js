import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'Reducers/index';

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}
