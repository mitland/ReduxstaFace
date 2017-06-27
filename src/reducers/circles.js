import {combineReducers} from 'redux-immutable';
import {Map, List} from 'immutable';
import * as actionTypes from 'ActionTypes';
import Circle from 'Records/Circle';

const initialState = Map({
    '1': new Circle({
        id: '1', 
        name: 'Вегетарианство',
    }),
    '2': new Circle({
        id: '2',
        name:'Веганство',
    }),
});

//Slice reducer
const circles = () => {
    const byId = (state = initialState, action) => {
        return state;
    };

    const allIds = (state = List('1', '2'), action) => {
        return state;
    };

    return combineReducers({
        byId,
        allIds,
    });
};

export default circles();

//Local selectors
export const getAllCircles = (state) => {
    return state.get('byId');
};

export const getCircleById = (state, id) => {
    return state.getIn(['byId', id]);
};
