import {combineReducers} from 'redux-immutable';
import * as actionTypes from 'ActionTypes';
import createNamedWrapperReducer from 'Utiles/createNamedWrapperReducer';

const dropDown = (state = false, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE:
            return !state; 
        default:
            return state;
    }
};

export default combineReducers({
    formatDropDown: createNamedWrapperReducer(dropDown, 'FORMAT_DROPDOWN'),
    circleDropDown: createNamedWrapperReducer(dropDown, 'CIRCLE_DROPDOWN'),
});

export const isCircleDropDownOpen = (state) => {
    return state.get('circleDropDown');
};

export const isFormatDropDownOpen = (state) => {
    return state.get('formatDropDown');
};