import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDeatails'
import Confirm from './Confirm'
import Success from './Success'

export default class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
    //Proceed to next step
    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }
     //Go back
     prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }
    //Handle change
    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value
        })
    }
    render() {
        const {step} = this.state;
        const {firstName,lastName,occupation,city,bio,email} = this.state;
        const value = {firstName,lastName,occupation,city,bio,email}
        
        switch(step){
            case 1:
                return <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} value={value}/>
            case 2:
                return <FormPersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} value={value} prevStep={this.prevStep} />
            case 3:
                return <Confirm nextStep={this.nextStep} value={value} prevStep={this.prevStep} />
            case 4: 
                return <Success/>
        }
    }
}
