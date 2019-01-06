//Imports
import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';
import Typist from 'react-typist';
import googleSvg from "../images/google.svg";
import {
    Grid,
    Typography,
    AppBar,
    Toolbar,
    Button
} from "@material-ui/core";



const FadeEnterAfterTypingDone = (props) => (
      <React.Fragment>
          <Fade
          children={props.children}
          in={props.visible}
          timeout={{enter: 2000}}
          > 
          </Fade>
      </React.Fragment>
);

const MobileSocials = () => (
  <React.Fragment>
    <Grid container justify="center" alignItems="center">
      <Grid item >
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
    </Grid>
  </React.Fragment>
);



const MobileNavbar = () => (
    <React.Fragment>
    <AppBar 
    
    color="inherit"
    >
      <Toolbar>
        <Grid item container justify="flex-end">
        <Button 
        color="secondary"
        variant="contained"
        >Login</Button>
        </Grid>
      </Toolbar>
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
              <Grid container style={{minHeight: "100vh"}}>
                <MobileNavbar />
                <MobileSocials /> 
              </Grid>
            </Hidden>
        </React.Fragment>    
        );
    }


}





export default Body;