import {combineReducers} from 'redux-immutable';
import {Map} from 'immutable';
import * as actionTypes from 'ActionTypes';
import Post from 'Records/Post';

const postCreator = () => {
    const isOpen = (state = false, action) => {
        switch(action.type) {
            case actionTypes.OPEN_POST_CREATOR:
                return true;
            case actionTypes.CLOSE_POST_CREATOR:
                return false;
            default:
                return state;
        }
    };

    const isCreating = (state = false, action) => {
        switch(action.type) {
            case actionTypes.CREATING_POST:
                return true;
            case actionTypes.CREATED_POST:
                return false;
            default:
                return state;
        }
    };

    const post = (state = new Post(), action) => {
        switch(action.type) {
            case actionTypes.CREATE_POST:
                return new Post();
            case actionTypes.ADD_CIRCLE_TO_POST_CREATOR:
                return state.set('circle', action.circle);
            case actionTypes.ADD_TAG_TO_POST_CREATOR:
                return state.update('tags', (tags) => {
                    return tags.push(action.tag);
                });
            case actionTypes.DELETE_TAG_FROM_POST_CREATOR:
                return state.update('tags', (tags) => {
                    return tags.delete(action.tagIndex);
                });
            case actionTypes.CHANGE_CONTENT_ON_POST_CREATOR:
                return state.set('content', action.content);
            default:
                return state;
        }
    };

    return combineReducers({
        isOpen,
        isCreating,
        post,
    });
};

export default postCreator();

//Local Selectors
export const getPost = (state) => {
    return state.get('post');
};

export const getPostCircle = (state) => {
    return state.getIn(['post', 'circle']);
};

export const getPostContent = (state) => {
    return state.getIn(['post', 'content']);
};

export const getPostTags = (state) => {
    return state.getIn(['post', 'tags']);
};

export const getIsOpen = (state) => {
    return state.get('isOpen');
};

export const getIsCreating = (state) => {
    return state.get('isCreating');
};
