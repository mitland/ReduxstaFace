import {combineReducers} from 'redux-immutable';
import {Map, List} from 'immutable';
import User from 'Records/User';

const initialState = Map({
    '1': new User({
        id: '1', 
        name: 'Х',
        circles: List('1', '2'),
    }),
});

//Slice reducer
const users = () => {
    const byId = (state = initialState, action) => {
        return state;
    };

    const allIds = (state = List('1'), action) => {
        return state;
    };

    return combineReducers({
        byId,
        allIds,
    });
};

export default users();

//Local selectors
export const getAllUsers = (state) => {
    return state.get('byId');
};

export const getUserById = (state, id) => {
    return state.getIn(['byId', id]);
};
