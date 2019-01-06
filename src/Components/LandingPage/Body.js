//Imports
import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';
import Typist from 'react-typist';
import googleSvg from "../images/google.svg";
import guest from "../images/guest.svg";

import {
    Grid,
    Typography,
    AppBar,
    Button
} from "@material-ui/core";



const FadeElement = (props) => (
      <React.Fragment>
          <Fade
          children={props.children}
          in={props.visible}
          timeout={{enter: props.timeout}}
          > 
          </Fade>
      </React.Fragment>
);

const MobileSocials = () => (
  <React.Fragment>
    <FadeElement 
    timeout={3000}
    visible={true}
    >
    <Grid item
      style={{marginTop: "2.5em"}} 
      >
        <Button
          variant="contained"
          color="inherit"
        >
          Google 
        <img 
        style={{paddingLeft: "5px"}}
        src ={googleSvg} alt ="Goolge-Icon" />
        </Button>
      </Grid>
    </FadeElement>

  <FadeElement
  visible={true}
  timeout={3500}
  >
    <Grid item 
    style={{marginTop: "1.5em"}}
    >
      <Button
        variant="contained"
        color="inherit"
        size="large"
        >
          Guest 
        <img 
          style={{paddingLeft: "20px"}}
          src ={guest} alt ="Goolge-Icon" />
        </Button>
    </Grid>
  </FadeElement>  
  </React.Fragment>
);



const MobileNavbar = () => (
    <React.Fragment>
    <AppBar
    style={{padding: 10}} 
    color="inherit"
    >
        <Grid item container justify="flex-end">
        <Button 
        color="secondary"
        variant="contained"
        >Login</Button>
        </Grid>
    </AppBar>
    </React.Fragment>
);

class Body extends Component {

  state = {
    visible: false
  }

    render () {
        return (
        <React.Fragment>
        {/* Desktop View */}
        <Hidden xsDown>
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
              <Typography variant="subtitle1" gutterBottom>
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