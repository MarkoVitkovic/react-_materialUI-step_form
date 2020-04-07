import React, { Component } from 'react'
import Provider from 'material-ui/styles/MuiThemeProvider'
import Navbar from 'material-ui/AppBar'



export default class Success extends Component {

   
    render() {
        
        return (
            <Provider>
                <>
                  <Navbar title = 'Success'  />
                  <h1>Thank you for your submission</h1>
                  <p>You will get email with further instructions</p>
                </>
            </Provider>      
        )
    }
}

