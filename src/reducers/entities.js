import {combineReducers} from 'redux-immutable';
import posts from 'Reducers/posts';
import users from 'Reducers/users';
import circles from 'Reducers/circles';

export default combineReducers({
    users,
    posts,
    circles,
});
