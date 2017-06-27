import React from 'react';
import PropTypes from 'prop-types';

const CloseMarkUp = ({handleClick}) => {
    return (
        <span 
         className='closeMarkUp'
         onClick={handleClick}>
            Х
        </span>
    );
};

CloseMarkUp.propTypes = {
    handleClick: PropTypes.func,
};

export default CloseMarkUp;
