import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({user}) => {
    return (
        <div className='avatarHolder'>
            <span className='avatarText'>
                {user.name}
            </span>
        </div>
    );
};

Avatar.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
};

export default Avatar;
