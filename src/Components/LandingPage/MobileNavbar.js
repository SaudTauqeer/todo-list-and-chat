//Imports
import React from "react";
import 
{AppBar, 
Toolbar,
Button,
Grid
} from "@material-ui/core";

const MobileNavbar = () => (
    <React.Fragment>
    <AppBar
    style={{padding: 10}} 
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


export default MobileNavbar;