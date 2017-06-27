import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';    
import * as actions from 'Actions/index';
import PostCreator from 'Components/PostCreator';
import {
    getPost, 
    getIsPostOpen, 
    getCircles, 
    getCurrentUser,
    isCircleDropDownOpen,
    isFormatDropDownOpen,
} from 'Selectors';

//@Can be done in state shape, but too much boilerplate for nothing
const BLOCK_TYPES = [
    {label: 'H2', type:'block', style: 'header-two'},
    {label: 'H3', type:'block', style: 'header-three'},
    {label: 'B', style: 'BOLD'},
    {label: 'I', style: 'ITALIC'},
    {label: 'U', style: 'UNDERLINE'},
    {label: 'UL', type:'block', style: 'unordered-list-item'},
    {label: 'OL', type:'block', style: 'ordered-list-item'},
];

const mapStateToProps = (state) => {
    return {
        isOpen: getIsPostOpen(state),
        user: getCurrentUser(state),
        post: getPost(state),
        circles: getCircles(state),
        formats: BLOCK_TYPES,
        isCircleDropdownOpen: isCircleDropDownOpen(state),
        isFormatDropdownOpen: isFormatDropDownOpen(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCreator);
