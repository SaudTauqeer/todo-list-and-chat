// Imports
import React from "react";
import {Paper, Grid, Button} from "@material-ui/core";

const style = {
    container: { height: 150 }
}

const UserPortal = () => {
    return (
        <React.Fragment>
        
        <Paper>
            <Grid container 
            justify="center" 
            style={style.container}
            alignItems= "center"
            >
                <Grid item>
                    <Button
                    variant="contained"
                    size="large"
                    >
                        
                    </Button>
                </Grid>
            </Grid>
        </Paper>

        </React.Fragment>
    );
}


export default UserPortal;