import React from 'react';
import Feed from 'Components/Feed';
import Avatar from 'Components/Avatar';
import {Editor, EditorState} from 'draft-js'; 

const PostList = ({
     posts,
}) => {
    return (
        <div>
            {posts.map((post, index) => {
                return (
                    <Feed key={index}>
                        <div className='headerLine'>
                            <div style={{
                                fontSize: '12px',
                                display: 'inline-block',
                                verticalAlign: 'middle',
                            }}>
                                <p>
                                    Публикувано в/във 
                                    {post.circle.name || 'Общо'}
                                </p>
                            </div>
                        </div>

                        <Avatar user={post.author}/>

                        <div className='tab'>
                            <Editor
                             editorState={post.content}
                             readOnly={true}/>

                            <ul style={{padding:0}}>
                                {post.tags.map((tag, index) => {
                                    return (
                                        <li
                                         className='tagBox'
                                         key={index}>
                                            {tag}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Feed>
                );
            })}
        </div>
    );
};

export default PostList;
