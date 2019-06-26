import React from 'react';
import List from './List';
import service  from '../model';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentWillMount(){
        this.setState({
            items:service.getData()
        })
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            let arr = this.state.items;
            arr.push({ name: e.target.value.trim(), done: false });
            this.setState({
                items: arr
            });
            e.target.value = '';
            this.updateData();
        }
    }
    handleRemove = (item) => {
        let arr = this.state.items;
        let i = arr.findIndex(v => v === item);
        arr.splice(i, 1);
        this.setState({
            items: arr
        });
        this.updateData();
    }
    handleToggle = (item) => {
        let arr = this.state.items;
        item.done = !item.done;
        this.setState({
            items: arr
        });
        this.updateData();
    }
    updateData(){
        service.saveData(this.state.items);
    }
    render() {
        return (
            <div>
                <div>
                    add list <input type="text" onKeyDown={this.handleKeyDown} placeholder="edit" />
                </div>
                {this.state.items.map((v, k) => {
                    return (
                        <p key={k}>{v.name}</p>
                    )
                })}
                <List data={this.state.items.filter(item => !item.done)} removeItem={this.handleRemove} toggleCheck={this.handleToggle}></List>
                <hr />
                <List title="已经完成" data={this.state.items.filter(item => item.done)} removeItem={this.handleRemove} toggleCheck={this.handleToggle}></List>
            </div>
        );
    }
}

export default TodoList;