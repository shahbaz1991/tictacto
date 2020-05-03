import React, { Component } from 'react'
class  Board extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:Array(9).fill(null),
            xIsNext:true
        }}
    handleSubmit(i){
        const newarr=[...this.state.value]
        if(calWinner(newarr)||newarr[i]){
            return;
        }
        newarr[i]=this.state.xIsNext?'X':'O'
        this.setState({
            value:newarr,
            xIsNext:!this.state.xIsNext
        })
    }     
    square(i){
        return(
        <Square value={this.state.value[i]} onClick={()=>{this.handleSubmit(i)}}/>)
    }           
    render() {
        const winner=calWinner(this.state.value)
        let status
        if (winner){
            status='Winner'+winner
        }
        else{
        status='Player : '+(this.state.xIsNext?'X':'O')+"'s turn"
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board">
                    {this.square(0)}
                    {this.square(1)}
                    {this.square(2)}
                </div>
                <div className="board">
                    {this.square(3)}
                    {this.square(4)}
                    {this.square(5)}            
                </div>
                <div className="board">
                    {this.square(6)}
                    {this.square(7)}
                    {this.square(8)}          
                </div>
            </div>
        );
    }
}
function Square(props){
        return (
            <div>
                <button className='Square' onClick={props.onClick}>
                 {props.value}
                </button>
            </div>
        )}
function calWinner(value){
    const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],        
    ]
    for (let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i]
        if (value[a]===value[b] && value[a]===value[c])
        {
            return value[a]
        }}
    return null
    }

export default Board 