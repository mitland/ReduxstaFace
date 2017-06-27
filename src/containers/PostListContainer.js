import React from 'react';
import {connect} from 'react-redux';
import {getPosts} from 'Selectors';
import PostList from 'Components/PostList';

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    };
};

export default connect(mapStateToProps)(PostList);
