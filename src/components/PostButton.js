import React from 'react';

const PostButton = ({
     onClick
}) => {
    return (
        <a 
         href='#'
         className='postButton'
         onClick={onClick}>
            <span className='fa fa-edit'></span>
            Публикуване
        </a>
    );
};

export default PostButton;
