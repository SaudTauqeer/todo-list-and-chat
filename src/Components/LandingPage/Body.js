//Imports
import React, { Component } from "react";
import Hidden from '@material-ui/core/Hidden';
import Typist from 'react-typist';
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import DesktopSocials from "./DesktopSocials";
import MobileSocials from "./MobileSocials";
import 
{
Grid,
Typography
} 
from "@material-ui/core";



class Body extends Component {

  state = {
    visible: false
  }

    render () {
        return (
        <React.Fragment>
        {/* Desktop View */}
        <Hidden xsDown>
          <Navbar />
          <Grid container
            style={{
              minHeight: "100vh",
              margin: "0, 20, 0"
              }} 
              justify="center"
              alignItems="center"
            >
              <Grid item > 
                <Typography variant="h2">
                  <Typist 
                    startDelay={1000}
                    avgTypingDelay={35}
                    cursor={
                    {
                    hideWhenDoneDelay: 100,
                    hideWhenDone: true
                    }}
                    onTypingDone={()=> this.setState({visible: true})}
                    >
                      Hello there...
                      <Typist.Backspace count={15} delay={1000} />

                      This is a To-do list app.
                      <Typist.Backspace count={25} delay={1000} />
                      But with a twist.
                      <Typist.Backspace count={17} delay= {1000} />
                      You can also chat with online users. Pretty cool ye? 
                    <Typist.Backspace  count = {53} delay = {500} />
                    </Typist>
                  </Typography>
                </Grid>
                    <Grid item>
                      {(this.state.visible ? (<DesktopSocials />)  : "")}
                    </Grid>

            </Grid>
            </Hidden>
                      
            {/* Mobile view without react-typist. Shows Mobile friendly layout.*/}
            <Hidden smUp>
              <Grid container
              justify= "center" 
              alignItems="center"
              direction="column"
              style={{minHeight: "100vh", overflowY: "hidden"}}>
              <Typography variant="h4" gutterBottom >
                To-Do List & Chat
              </Typography>
              <Typography 
              style={{paddingLeft: 14}}
              variant="subtitle1" gutterBottom>
                    Manage your Tasks & chat with online users.
              </Typography>
                <MobileNavbar />
                <MobileSocials /> 
              </Grid>
            </Hidden>
        </React.Fragment>    
        );
    }


}





export default Body;