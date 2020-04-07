import React, { Component } from 'react'
import Provider from 'material-ui/styles/MuiThemeProvider'
import Navbar from 'material-ui/AppBar'
import Text from 'material-ui/TextField'
import Button from 'material-ui/RaisedButton'


export default class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {value, handleChange} = this.props;
        return (
            <Provider>
                <>
                  <Navbar title = 'Enter personal details'  />
                  <Text 
                    hintText="Enter your Occupation" 
                    floatingLabelText = "Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue = {value.occupation}
                  /><br/>
                  <Text 
                    hintText="Enter your city" 
                    floatingLabelText = "City"
                    onChange={handleChange('city')}
                    defaultValue = {value.city}
                  /><br/>
                  <Text 
                    hintText="Enter your bio" 
                    floatingLabelText = "Bio"
                    onChange={handleChange('bio')}
                    defaultValue = {value.bio}
                  /><br/>
                  <Button
                    label ="Continue"
                    primary = {true}
                    style={styles.button}
                    onClick={this.continue}
                  />
                  <Button
                    label ="Back"
                    primary = {false}
                    style={styles.button}
                    onClick={this.back}
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
