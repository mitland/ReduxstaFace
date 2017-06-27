import {combineReducers} from 'redux-immutable';
import {Map, List} from 'immutable';
import * as actionTypes from 'ActionTypes';
import Post from 'Records/Post';

const isPostRecord = (post) => {
    return post instanceof Post;
};

//Slice reducers
const post = (state, action) => {
    let post = action.post;
    
    if(!isPostRecord(post)) {
        post = new Post(post);
    }

    switch(action.type) {
        case actionTypes.CREATE_POST:
            return post.normalize();
        default:
            return state;
    }
};

const posts = () => {
    const byId = (state = Map(), action) => {
        switch(action.type) {
            case actionTypes.CREATE_POST:
                const newPost = post(undefined, action);
                return state.set(newPost.id, newPost);
            default:
                return state;
        }
    };

    const allIds = (state = List(), action) => {
        switch(action.type) {
            case actionTypes.CREATE_POST:
                return state.push(action.post.id);
            default:
                return state;
        }
    };

    return combineReducers({
        byId,
        allIds,
    });
};

export default posts();

//Local selectors
export const getAllPosts = (state) => {
    return state.get('byId');
};

export const getPostById = (state, id) => {
    return state.getIn(['byId', id]);
};
