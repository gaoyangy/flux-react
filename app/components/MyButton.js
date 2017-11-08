import React, {Component} from 'react'

class MyButton extends Component {

    render() {
        let items = this.props.items;
        return (
            <div>
                <ul>
                    {items.map((result, key) => {
                        return (
                            <div key={key} ref="delId">
                            <button onClick={this.removeDiv.bind(this,key)}>x</button>
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
    removeDiv(key,event) {
        console.log(this,event,key)
        this.props.reMove(key)
    }
}

export default MyButton