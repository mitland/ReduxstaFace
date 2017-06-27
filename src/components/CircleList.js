import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'Records/Circle';

export default function CircleList({
    circles,
    handleClick,
}) {
    return (
        <ul>
            {circles.map((item, index) => {
                return (
                    <li
                     key={index}
                     onClick={() => {handleClick(index);}}>
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
}

CircleList.propTypes = {
    circles: PropTypes.objectOf(Circle).isRequired,
    handleClick: PropTypes.func.isRequired,
};
