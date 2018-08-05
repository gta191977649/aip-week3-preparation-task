import React, { Component } from 'react';
class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }
  componentDidMount() {
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}));
  }
  render() {
    return (
      <div>
        <h1>Data</h1>
        <ul>
          {this.state.customers.map(customer =>
          <li key={customer.id}>{customer.fristname}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Customers;
