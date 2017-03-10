import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleType = this.handleType.bind(this);
    this.addTransaction = this.addTransaction.bind(this);

    this.state = {
      money: 0,
      type: 'income',
      transactions: []
    };
  }

  handleInput(e) {
    this.setState({money: e.target.value})
  }

  handleType(e) {
    this.setState({type: e.target.value})
  }

  addTransaction(e) {
    e.preventDefault();
    if(this.state.money > 0){
      let newTransection = {
        id: Date.now(),
        money: +this.state.money,
        type: this.state.type,
      }
      this.setState((prevState) => ({
        transactions: prevState.transactions.concat(newTransection),
        money: 0,
        type: 'income',
      }),()=>console.log(this.state))
    }else{
      alert('Please Input Money >= 1')
    }
  }

  render() {

    let income =  this.state.transactions.filter(a=>a.type=='income').reduce((a,b)=>a+b.money,0);
    let outcome = this.state.transactions.filter(a=>a.type=='outcome').reduce((a,b)=>a+b.money,0);;
    let balance = income - outcome;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Balancer!</h2>
        </div>
        <div>
          <form onSubmit={this.addTransaction}>
            <input type="number" onChange={this.handleInput} value={this.state.money} />
            <select id="fruit" onChange={this.handleType} value={this.state.type}>
              <option value="income" >Income</option>
              <option value="outcome">Outcome</option>
            </select>
            <button>Add</button>
          </form>
        </div>
        <hr/>
        <p>INCOME : {income}</p>
        <p>OUTCOME : {outcome}</p>
        <p>BALANCE : {balance}</p>
        <hr/>
        <div>
          <TransactionList transactions={this.state.transactions} />
        </div>
      </div>
    );
  }
}

class TransactionList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.transactions.map(transaction => (
          <li key={transaction.id}>{transaction.money} : {transaction.type}</li>
        ))}
      </ul>
    );
  }
}

export default App;
