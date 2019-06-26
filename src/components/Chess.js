import React, { Component } from 'react';
import '../assets/chess.css';

class Chess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '井字棋',
            currentRound: { round: 1, role: 'x' },
            items: Array(9).fill(null),
            history: [],
            rule: ['012', '345', '678', '036', '147', '258', '048', '246']
        };
    }
    handleClick(i) {
        let arr = [...this.state.items];
        if (arr[i] !== null) return;
        let current = this.state.currentRound;
        this.setState({
            history: [...this.state.history, { items: arr, ...current }]
        })
        let arr1 = [...this.state.items];
        arr1[i] = this.state.currentRound.role;
        this.battle(arr1, current.round, current.role);
        current.round++;
        current.role = current.role === 'x' ? 'o' : 'x';
        this.setState({
            items: arr1,
            currentRound: current,
        });

    }
    handleBack = (i) => {
        this.setState({
            currentRound: { round: this.state.history[i].round, role: this.state.history[i].role },
            items: this.state.history[i].items,
            history: this.state.history.slice(0, i)
        });
    }
    battle = (arr, round, role) => {
        let str = arr.map((item,i)=>({index:i,value:item})).filter(item => item.value === role).map(v => v.index).join('');
        if(str.length<3)return;
        if (this.state.rule.some(item => {
            return Array.from(item).every(v=>str.includes(v));
        })) {
            alert(`${this.state.currentRound.role} Win the game`);
        }else{
            if(round===9){
                alert('Tie the game');
            }
        }
    }
    render() {
        return (
            <div className="container">
                <h2>{this.state.title}</h2>
                <p>Round {this.state.currentRound.round}</p>
                <p>{this.state.currentRound.role} Play</p>
                <div className="chess">
                    {this.state.items.map((v, k) => {
                        return <span key={k} onClick={this.handleClick.bind(this, k)}>{v ? v : ''}</span>
                    })}
                </div>
                <hr/>
                <div>
                    {this.state.history.map((v, k) => {
                        return <span key={k} onClick={this.handleBack.bind(this, k)} style={{margin:'0 10px'}}>{v.round}</span>
                    })}
                </div>
            </div>
        );
    }
}

export default Chess;