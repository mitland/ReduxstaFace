import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Circle from 'Records/Circle';
import CircleList from 'Components/CircleList';

export default class CircleDropDown extends Component {
    constructor(props) {
        super(props);

        this.handleListClick = this.handleListClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.handleOutsideClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick(event) {
        const html = ReactDom.findDOMNode(this); 

        if(!html.contains(event.target) && this.props.isOpen) {
            this.props.onOutsideClick();
        }
    }

    handleListClick(itemIndex) {
        this.props.onToggle();
        this.props.onListClick(itemIndex);
    }

    render() {
        const {
             title,
             circles,
             isOpen,
             onToggle,
        } = this.props;
        
        return (
            <div className='selectMenu'>
                <div onClick={onToggle}>
                    {title}
                    <i className="fa fa-angle-down"></i>
                </div>

                {isOpen ? (
                    <div className='list'>
                        <CircleList
                         circles={circles}
                         handleClick={this.handleListClick}/>
                    </div>
                ) : null}
            </div>
        );
    }
}

CircleDropDown.propTypes = {
    title: PropTypes.string.isRequired,
    circles: PropTypes.objectOf(Circle).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onOutsideClick: PropTypes.func.isRequired,
};
