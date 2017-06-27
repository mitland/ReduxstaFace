import React from 'react';
import PropTypes from 'prop-types';
import StyleButton from 'Components/StyleButton';

export default function EditorFormatBlock({
     formats,
     editorState,
     onToggleBlockFormat,
     onToggleStyleFormat,
}) {
    //Get current inline style
    const currentInlineStyle = editorState.getCurrentInlineStyle();
    //Get current block style
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
        <ul className='blockList'>
            {formats.map((format, index) => {
                return (
                    <li 
                     key={index} 
                     className='blockItem'>
                        <StyleButton 
                         label={format.label}
                         style={format.style}
                         active={format.type === 'block' 
                            ? format.style === blockType
                            : format.style === currentInlineStyle
                         }                         
                         onToggle={format.type === 'block' 
                            ? () => { onToggleBlockFormat(format.style); }
                            : () => { onToggleStyleFormat(format.style); }
                         }/>
                    </li>
                );
            })}
        </ul>
    );
}

EditorFormatBlock.styles = {
    ul: {
        padding: '0',
        zIndex: '1',
        userSelect: 'none',
        position: 'absolute',
        width: '352px',
        left: '-50px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        border: '1px solid #dfdfdf',
        textAlign: 'center',
        boxShadow: '0 2px 23px rgba(0,0,0,.2)',
    },
    li: {
        display: 'inline-block',
        paddingRight: '5px',
        padding: '12px',
        verticalAlign: 'top',
        paddingLeft: '0',
        marginLeft: '-5px',
        listStyle: 'none',
    },
};

EditorFormatBlock.propTypes = {
    formats: PropTypes.array.isRequired,
    editorState: PropTypes.object.isRequired,
    onToggleBlockFormat: PropTypes.func.isRequired,
    onToggleStyleFormat: PropTypes.func.isRequired,
};
