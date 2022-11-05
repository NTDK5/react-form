import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from "material-ui/AppBar";
import {List, ListItem }from "material-ui/List";
import  RaisedButton   from 'material-ui/RaisedButton';


export class FormUserDetails extends Component {
  Continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  Back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render(){
  const {values:{firstName, LastName, email, occupation, city, bio}}=this.props;
  
  return (
   <MuiThemeProvider> 
    <React.Fragment>
      <AppBar title='Confirm User Data' />
      <List>
        <ListItem 
        primaryText='First Name'
        secondaryText={firstName} />
        <ListItem 
        primaryText='Last Name'
        secondaryText={LastName} />
        <ListItem 
        primaryText='Email'
        secondaryText={email} />
        <ListItem 
        primaryText='occupation'
        secondaryText={occupation} />
        <ListItem 
        primaryText='city'
        secondaryText={city} />
        <ListItem 
        primaryText='bio'
        secondaryText={bio} />
      </List>
      <RaisedButton label='Confirm'
      primary={true}
      style={styles.button}
      onClick={this.Continue}/>
      <RaisedButton label='Back'
      primary={false}
      style={styles.button}
      onClick={this.Back}/>
    </React.Fragment>
   </MuiThemeProvider>
  )

}
}
const styles = {
  button:{
  margin:15
}};

export default FormUserDetails;