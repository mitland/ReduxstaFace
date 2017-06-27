import React from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState} from 'draft-js';
import Post from 'Records/Post';
import User from 'Records/User';
import Circle from 'Records/Circle';
import TagBox from 'Components/TagBox';
import Feed from 'Components/Feed';
import Avatar from 'Components/Avatar';
import PostButton from 'Components/PostButton';
import PlaceHolder from 'Components/PlaceHolder';
import CloseMarkUp from 'Components/CloseMarkUp';
import FormatDropDown from 'Components/FormatDropDown';
import CircleDropDown from 'Components/CircleDropDown';

const PostCreator = ({
    isOpen,
    user,
    post,
    circles,
    formats,
    isCircleDropdownOpen,
    isFormatDropdownOpen,
    toggleCircleDropdown,
    toggleFormatDropdown,
    openPostCrator,
    closePostCrator,
    addCircleToPostCreator,
    addTagToPostCreator,
    deleteTagFromPostCreator,
    createPost,
    changePostCreatorContent,
    changePostCreatoreContentBlockType,
    changePostCreatoreContentInlineStyle,
}) => {
    return (
        isOpen ? (
            <Feed>
                <Avatar user={user}/>
                <div className='tab'>
                    <CircleDropDown
                     title={post.circle.name || 'Изберете общност'}
                     circles={circles}
                     isOpen={isCircleDropdownOpen}
                     onToggle={toggleCircleDropdown}
                     onListClick={addCircleToPostCreator}
                     onOutsideClick={toggleCircleDropdown}/>
                    
                    <CloseMarkUp handleClick={closePostCrator}/>

                    <Editor
                     editorState={post.content}
                     placeholder={'Какво искате да споделите?'}
                     onChange={changePostCreatorContent}/>

                    <TagBox
                     tags={post.tags}
                     onTagAdd={addTagToPostCreator}
                     onTagDelete={deleteTagFromPostCreator}/>

                    <FormatDropDown
                     isOpen={isFormatDropdownOpen}
                     formats={formats}
                     editorState={post.content}
                     onToggle={toggleFormatDropdown}
                     onToggleBlockFormat={changePostCreatoreContentBlockType}
                     onToggleStyleFormat={changePostCreatoreContentInlineStyle}/>

                    <PostButton
                     onClick={createPost}/>
                </div>
            </Feed>
        ) : (
            <Feed handleClick={openPostCrator}>
                <Avatar user={user}/>
                <PlaceHolder text={'Какво искате да споделите?'}/>
            </Feed>
        )
    );
};

PostCreator.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    user: PropTypes.objectOf(User).isRequired,
    post: PropTypes.instanceOf(Post).isRequired,
    circles: React.PropTypes.objectOf(Circle).isRequired,
    formats: PropTypes.array.isRequired,
    isCircleDropdownOpen: PropTypes.bool.isRequired,
    isFormatDropdownOpen: PropTypes.bool.isRequired,
    toggleCircleDropdown: PropTypes.func.isRequired,
    toggleFormatDropdown: PropTypes.func.isRequired,
    openPostCrator: PropTypes.func.isRequired,
    closePostCrator: PropTypes.func.isRequired,
    addCircleToPostCreator: PropTypes.func.isRequired,
    addTagToPostCreator: PropTypes.func.isRequired,
    deleteTagFromPostCreator: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    changePostCreatorContent: PropTypes.func.isRequired,
    changePostCreatoreContentBlockType: PropTypes.func.isRequired,
    changePostCreatoreContentInlineStyle: PropTypes.func.isRequired,
};

export default PostCreator;
