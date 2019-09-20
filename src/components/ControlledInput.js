import React, { Component } from 'react'

export default class ControlledInput extends Component {
    constructor(){
        super()
        this.state={
            firstName: "John",
            lastName: "Doe"
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (event) =>{

    }

    render() {
        return (
            <div>
                <form onSubmit={ (event) => this.handleSubmit(event)}>
                    <input 
                        type="text" 
                        name="firstName" 
                        onChange={ (event) => this.handleChange(event)}
                        value={this.state.firstName}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        onChange={ (event) => this.handleChange(event)}
                        value={this.state.lastName}
                    />
                </form>
            </div>
        )
    }
}
