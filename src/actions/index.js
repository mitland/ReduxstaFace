import * as api from 'API';
import * as actionTypes from 'ActionTypes';
import {getPost, getPostContent, getCurrentUser} from 'Selectors';
import {convertFromRaw, convertToRaw, RichUtils} from 'draft-js'; 

export const openPostCrator = () => {
    return {
        type: actionTypes.OPEN_POST_CREATOR,
    };
};

export const closePostCrator = () => {
    return {
        type: actionTypes.CLOSE_POST_CREATOR,
    };
};

export const addCircleToPostCreator = (circle) => {
    return {
        type: actionTypes.ADD_CIRCLE_TO_POST_CREATOR,
        circle
    };
};

export const openFeedSelectMenu = () => {
    return {
        type: actionTypes.OPEN_FEED_SELECT_MENU,
    };
};

export const closeFeedSelectMenu = () => {
    return {
        type: actionTypes.CLOSE_FEED_SELECT_MENU,
    };
};

export const addTagToPostCreator = (tag) => {
    return {
        type: actionTypes.ADD_TAG_TO_POST_CREATOR,
        tag,
    };
};

export const deleteTagFromPostCreator = (tagIndex) => {
    return {
        type: actionTypes.DELETE_TAG_FROM_POST_CREATOR,
        tagIndex,
    };
};

const failCreatingPost = () => {
    return {
        type: actionTypes.FAIL_CREATING_POST,
    };
};

const creatingPost = () => {
    return {
        type: actionTypes.CREATING_POST,
    };
};

export const createdPost = (post) => {
    return {
        type: actionTypes.CREATE_POST,
        post: post,
    };
};

export const createPost = () => (dispatch, getState) => {
    const state = getState();
    const user = getCurrentUser(state).toObject();
    
    let post = getPost(state).toObject();
    post.author = user;

    dispatch(creatingPost());

    api.createPost(post)
        .then((response) => {
            dispatch(createdPost(response.post));
        }).catch((error) => {
            dispatch(failCreatingPost());
        });
};

export const changePostCreatorContent = (content) => {
    return {
        type: actionTypes.CHANGE_CONTENT_ON_POST_CREATOR,
        content,
    };
};

export const changePostCreatoreContentInlineStyle = (inlineStyle) => (dispatch, getState) => {
    dispatch(changePostCreatorContent(
        RichUtils.toggleInlineStyle(
          getPostContent(getState()),  
          inlineStyle
        )
    ));
};

export const changePostCreatoreContentBlockType = (blockType) => (dispatch, getState) => {
    dispatch(changePostCreatorContent(
        RichUtils.toggleBlockType(
          getPostContent(getState()),
          blockType
        )
    ));
};

export const toggleCircleDropdown = () => {
    return {
        type: actionTypes.TOGGLE,
        name: 'CIRCLE_DROPDOWN',
    };
};

export const handleCircleDropdownClick = (circle) => (dispatch, getState) => {
    dispatch(toggleCircleDropdown());
    dispatch(addCircleToPostCreator(circle));
};

export const toggleFormatDropdown = () => {
    return {
        type: actionTypes.TOGGLE,
        name: 'FORMAT_DROPDOWN',
    };
};

export const listenToWindowEvent = (name, mapEventToAction, filter = (e) => true) => (dispatch) => {
    const handleEvent = (event) => {
        if(filter(event)) {
            dispatch(mapEventToAction(event));
        }
    };

    window.addEventListener(name, handleEvent);

    return () => window.removeEventListener(name, handleEvent);
};