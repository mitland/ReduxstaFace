import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EditorFormatBlock from 'Components/EditorFormatBlock';

export default function FormatDropDown({
     isOpen,
     formats,
     editorState,
     onToggle,
     onToggleBlockFormat,
     onToggleStyleFormat,
}) {
    return (
        <div className='formatHolder'>
            <div
             className={isOpen ? 'formatHolder-active' : ''}
             onClick={onToggle}>
                A
            </div>
            
            {isOpen ? (
                <EditorFormatBlock
                 formats={formats}
                 editorState={editorState}
                 onToggleBlockFormat={onToggleBlockFormat}
                 onToggleStyleFormat={onToggleStyleFormat}/>
            ): null}
        </div> 
    );
}

FormatDropDown.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    formats: PropTypes.array.isRequired,
    editorState: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
    onToggleBlockFormat: PropTypes.func,
    onToggleStyleFormat: PropTypes.func,
};
