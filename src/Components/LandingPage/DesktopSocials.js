//Imports
import React from "react";
import GrowElement from "../GrowElement";
import googleSvg from "../images/google.svg";
import guest from "../images/guest.svg";
import {
Button,
Grid    
} from "@material-ui/core";

 const DesktopSocials = () => (
    <React.Fragment>
    <GrowElement
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
    </GrowElement>

  <GrowElement
  visible={true}
  timeout={3000}
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
  </GrowElement>  
  </React.Fragment>
);


export default DesktopSocials;