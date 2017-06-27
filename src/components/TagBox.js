import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddBar from 'Components/AddBar';
import CloseMarkUp from 'Components/CloseMarkUp';

export default function TagBox({
     tags,
     onTagAdd,
     onTagDelete,
}) {
    return (
        <div>
            <AddBar
             placeholder='Добавете таг...'
             onAdd={onTagAdd}/>
             <ul style={{padding:0}}>
                {tags.map((tag, index) => {
                    return (
                        <li
                         className='tagBox'
                         key={index}>
                            {tag}
                            <span
                             style={{marginLeft: 3}}
                             onClick={()=>{onTagDelete(index);}}>
                                х
                            </span>
                        </li>
                    );
                })}
             </ul>
        </div>
    );
}

TagBox.propTypes = {
    tags: PropTypes.any,
    onTagAdd: PropTypes.func,
    onTagDelete: PropTypes.func,
};
