import {v4} from 'node-uuid';
import Promise from 'promise';

const dataBase = {
    posts: {
    },
    users: {
    },
    communities: {
    },
};

const random = (min, max) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
};

const delay  = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const preparePost = (data) => {
    let post = data;
    post.id = v4();

    return post;
};

const handlePostCreation = (data) => {
    const post = preparePost(data);
    
    dataBase.posts[post.id] = post;

    return {
        code: 200,
        post,
    };
};

export const fetch = (entity, data = {}) => {
    return delay(1000).then(() => {
        if(random(1, 100) > 50) {
            return new Error('fail');
        }

        switch(entity) {
            case 'posts':
                return dataBase.posts;
            case 'posts/id':
                return dataBase.posts[data.id];
            case 'posts/create':
                return handlePostCreation(data);
            case 'users':
                return dataBase.users;
            case 'users/id':
                return dataBase.users[data.id];
            case 'users/create':
                return dataBase.users[data.id] = data;
            case 'communities':
                return dataBase.communities;
            case 'communities/id':
                return dataBase.communities[data.id];
            case 'communities/create':
                return dataBase.communities[data.id] = data;
        }
    });
};

export const createPost = (data) => {
    return fetch('posts/create', data);
};
