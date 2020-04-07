import React, { Component } from 'react'
import Provider from 'material-ui/styles/MuiThemeProvider'
import Navbar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
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
        const {value: {firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <Provider>
                <>
                  <Navbar title = 'Confirm user data'  />
                 <List>
                     <ListItem
                        primaryText="First Name"
                        secondaryText ={firstName}
                     /><br/>
                     <ListItem
                        primaryText="Last Name"
                        secondaryText ={lastName}
                     /><br/>
                     <ListItem
                        primaryText="Email"
                        secondaryText ={email}
                     /><br/>
                     <ListItem
                        primaryText="Occupation"
                        secondaryText ={occupation}
                     /><br/>
                     <ListItem
                        primaryText="City"
                        secondaryText ={city}
                     /><br/>
                     <ListItem
                        primaryText="Bio"
                        secondaryText ={bio}
                     /><br/>
                 </List>
                  <Button
                    label ="Confirm & Continue"
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
