import React, { Component } from 'react';
import calculate from './calculate';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {item:[],sum:''};
    this.onBlue = this.onBlue.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlue(e,index){
    if(e.target.value !== '' && isNaN(e.target.value)){
        e.target.parentNode.className = 'error';
        return;
    } else{
      let arr = this.state.item;
      arr.splice(index-1,1,Number(e.target.value));
      this.setState({item: arr});
      e.target.parentNode.className = '';
    }
  }

  onFocus(e){
    let total = 0;
    this.state.item.map((item) => {
      total += item;
      return 1;
    });
    let calcuatedSum = calculate(total); 
    //console.log(calcuatedSum);
    this.setState({sum : (calcuatedSum === -1 ? 'Bigger than million number not supported!' : calcuatedSum)});
  }

  render() {
    return (
      <div className="App">
        <div className="myGrid">
            <div>
              <span>
                <label>Number 1:</label>
                <input type="text" className="number" name="number1" onBlur={e => this.onBlue(e,1)} />
                <i>Value must be an number!</i>
              </span>
            </div>
            <div>
              <span>
                <label>Number 2:</label>
                <input type="text" className="number" name="number2" onBlur={e => this.onBlue(e,2)} />
                <i>Value must be an number!</i>
              </span>
            </div>
            <div>
              <span>
              <label>Number 3:</label>
                <input type="text" className="number" name="number3" onBlur={e => this.onBlue(e,3)} /> 
                <i>Value must be an number!</i>
              </span>
            </div>
            <div>
              <span>
                <label>Sum:</label>
                <input type="text" name="sum" placeholder="click inside to calculate total" value={this.state.sum} onFocus={this.onFocus} />
                <i>Value must be an number!</i>
              </span>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
