import * as posts from 'Reducers/posts';
import * as postCreator from 'Reducers/postCreator';
import * as circles from 'Reducers/circles';
import * as users from 'Reducers/users';
import * as rootUI from 'Reducers/rootUI';

const denormalizePost = (state, post) => {
    const author = getCurrentUser(state);
    const circle = getCircleById(state, post.get('circle'), post.remove('circle'));
    
    return post.withMutations((post) => {
        post
            .set('circle', circle)
            .set('author', author);
    });
};

export const getIsPostOpen = (state) => {
    return postCreator.getIsOpen(state.get('postCreator'));
};

export const getPost = (state) => {
    const post = postCreator.getPost(state.get('postCreator'));
    
    return denormalizePost(state, post);
};

export const getPostContent = (state) => {
    return postCreator.getPostContent(state.get('postCreator'));
};

export const getPosts = (state) => {
    return posts.getAllPosts(state.getIn(['entities', 'posts'])).map((post) => {
        return denormalizePost(state, post);
    });
};

export const getCircles = (state) => {
    return circles.getAllCircles(state.getIn(['entities', 'circles']));
};

export const getCircleById = (state, id, defaul) => {
    return circles.getCircleById(state.getIn(['entities', 'circles']), id) || defaul;
};

export const getUsers = (state) => {
    return users.getAllUsers(state.getIn(['entities', 'users']));
};

export const getUserById = (state, id, defaul) => {
    return users.getUserById(state.getIn(['entities', 'users']), id) || defaul;
};

export const getCurrentUser = (state) => {
    const currentUserId = '1';

    return getUserById(state, currentUserId);
};

export const isCircleDropDownOpen = (state) => {
    return rootUI.isCircleDropDownOpen(state.get('rootUI'));
};

export const isFormatDropDownOpen = (state) => {
    return rootUI.isFormatDropDownOpen(state.get('rootUI'));
};