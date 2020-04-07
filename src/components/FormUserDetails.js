import React, { Component } from 'react'
import Provider from 'material-ui/styles/MuiThemeProvider'
import Navbar from 'material-ui/AppBar'
import Text from 'material-ui/TextField'
import Button from 'material-ui/RaisedButton'


export default class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {value, handleChange} = this.props;
        return (
            <Provider>
                <>
                  <Navbar title = 'Enter user details'  />
                  <Text 
                    hintText="Enter your first name" 
                    floatingLabelText = "First Name"
                    onChange={handleChange('firstName')}
                    defaultValue = {value.firstName}
                  /><br/>
                  <Text 
                    hintText="Enter your last name" 
                    floatingLabelText = "Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue = {value.lastName}
                  /><br/>
                  <Text 
                    hintText="Enter your email" 
                    floatingLabelText = "Email"
                    onChange={handleChange('email')}
                    defaultValue = {value.email}
                  /><br/>
                  <Button
                    label ="Continue"
                    primary = {true}
                    style={styles.button}
                    onClick={this.continue}
                  />
                </>
            </Provider>      
        )
    }
}
const styles = {
 button:{
     margin: 15
 }
}
