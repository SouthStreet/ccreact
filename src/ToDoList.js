import React, {Component, Fragment} from 'react'
import ToDoItem from './ToDoItem'
import './Todolist.css'

class ToDoList extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                {/*外层少个标签*/}
                <div>
                    <input className=' input'
                           type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {
                        this.getToDoItem()
                    }
                </ul>
            </Fragment>
        )
    }

    getToDoItem() {
        return this.state.list.map((item, index) => {
            return (
                <ToDoItem
                    key={index}
                    content={item}
                    id={index}
                    method={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(
            () => ({inputValue: value})
        )
    }

    handleButtonClick() {
        this.setState(
            // {
            //     list: [...this.state.list, this.state.inputValue],
            //     inputValue: ''
            // }
            prevState => ({
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            })
        )
    }

    handleItemDelete(index) {
        this.setState(
            // {
            //     list: list
            // }
            prevState => {
                const list = [...prevState.list];
                list.splice(index, 1);
                return {list}
            }
        );

    }
}

export default ToDoList