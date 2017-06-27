import React from 'react';
import PropTypes from 'prop-types';

const Feed = ({
     children,
     handleClick
}) => {
    return (
        <div 
         className='feed'
         onClick={handleClick}>
            {children}
        </div>
    );
};

Feed.propTypes = {
    children: PropTypes.any,
    handleClick: PropTypes.func,
};

export default Feed;
