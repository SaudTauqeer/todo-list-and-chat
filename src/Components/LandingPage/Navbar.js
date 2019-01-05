//Imports
import React from "react";
import {
    Grid, 
    Typography, 
    Toolbar
} from "@material-ui/core";


const Navbar = () =>(
    <React.Fragment>
        <Toolbar>
            <Grid container justify="space-between">
                <Grid item > 
                    <Typography variant="h5">
                        Todo-List & Chat
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography>
                        Hello there 
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
    </React.Fragment>
);




export default Navbar;