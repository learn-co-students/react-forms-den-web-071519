import React, { Component } from 'react'

export default class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }
  //
  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleSubmit = event => {

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}
