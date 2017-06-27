import React from 'react';
import PropTypes from 'prop-types';

export default function StyleButtton({
    active,
    label,
    style,
    onToggle,
}) {
    let className = 'RichEditor-styleButton';
    
    if(active) {
        className += ' RichEditor-activeButton';
    }

    return (
        <span 
         className={className} 
         onMouseDown={onToggle}>
            {label}
        </span>
    );
}

StyleButtton.propTypes = {
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    onToggle: PropTypes.func,
};
