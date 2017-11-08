import React, {Component} from 'react'

class MyButton extends Component {

    render() {
        let items = this.props.items;
        if (this.refs) {
            console.log(this.refs.delId.key)
        }
        return (
            <div>
                <ul>
                    {items.map((result, key) => {
                        return (
                            <div key={key} ref="delId">
                            <button onClick={this.props.reMove}>x</button>
                            {key}---{result}
                            </div>
                        )
                    })}
                </ul>
                <input onChange={this.props.changeValue} value={this.props.value}/>
                <button onClick={this.props.onClick}>add New Item</button>
            </div>
        )
    }
}

export default MyButton