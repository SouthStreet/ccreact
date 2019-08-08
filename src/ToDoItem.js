import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const {content} = this.props;
        return <div
            onClick={this.handleClick}
        >
            {content}
        </div>
    }

    handleClick() {
        const {method, id} = this.props;
        method(id);
    }


}

ToDoItem.propTypes = {
    content: PropTypes.string.isRequired,
    method: PropTypes.func,
    id: PropTypes.number

};

export default ToDoItem;