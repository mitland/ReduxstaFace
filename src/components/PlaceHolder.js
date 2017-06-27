import React from 'react';
import PropTypes from 'prop-types';

const PlaceHolder = ({text}) => {
    return (
        <div className='placeHolderBody'>
            <span className='placeHolderText'>
                {text}
            </span>
        </div>
    );
};

PlaceHolder.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PlaceHolder;
