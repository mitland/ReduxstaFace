import {combineReducers} from 'redux-immutable';
import rootUI from 'Reducers/rootUI';
import entities from 'Reducers/entities';
import postCreator from 'Reducers/postCreator';
import * as actionTypes from 'ActionTypes';

export default combineReducers({
    entities,
    postCreator,
    rootUI,
});
