import React, {Component, Fragment} from 'react'
import './Todolist.css'

class Todolist extends Component {
    constructor(pros) {
        super(pros);
        this.state = {
            inputValue: 'xxx',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
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
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}
                                    onClick={this.handleLiClick.bind(this.index)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )


    }

    handleInputChange(e) {
        this.setState(
            {
                inputValue: e.target.value
            }
        )
    }

    handleButtonClick() {
        this.setState(
            {
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            }
        )
    }

    handleLiClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState(
            {
                list: list
            }
        );

    }
}

export default Todolist