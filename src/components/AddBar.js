import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddBar extends Component {
    componentDidMount() {
        window.addEventListener('keypress', this.handleEnterKeyPress.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('keypress', this.handleEnterKeyPress.bind(this));
    }

    handleEnterKeyPress(event) {
        if(
            event.keyCode === 13 && 
            this.input === document.activeElement &&
            this.input.value !== ''
        ) {
            this.props.onAdd(this.input.value);
            this.input.value = '';
        }
    }

    render() {
        const {
            placeholder,
        } = this.props;

        return (
            <input
             className='addBar'
             ref={(node)=>{this.input = node;}}
             type='text' 
             placeholder={placeholder}/>
        );
    }
}

AddBar.propTypes = {
    placeholder: PropTypes.string,
    onAdd: PropTypes.func,
};
