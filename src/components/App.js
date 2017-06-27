import React from 'react';
import PostListContainer from 'Containers/PostListContainer'; 
import PostCreatorContainer from 'Containers/PostCreatorContainer'; 

export default function() {
    return (
        <div>
            <PostCreatorContainer/>
            <PostListContainer/>
        </div>
    );
}
