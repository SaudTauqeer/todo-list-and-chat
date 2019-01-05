//Imports
import React from "react";
import {
    Grid,
    Typography,

} from "@material-ui/core";

import Typist from 'react-typist';

const style = {
    containerTop : {padding: 20, marginTop: "20em"}
};

const afterTypingEndsButton = () => (
    <React.Fragment>
        {alert("putos")}
    </React.Fragment>
);



const Body = () => (
    <React.Fragment>
    <Grid container 
    justify="center"
    style={style.containerTop}
    >
        <Typography variant="h2">
        <Typist 
        cursor={{hideWhenDone: true}}
        onTypingDone={afterTypingEndsButton}
        >
         Hello there...
         <Typist.Backspace count={15} delay={1000} />

            This is a To-do list app.
            <Typist.Backspace count={25} delay={1000} />
            But with a twist.
            <Typist.Backspace count={17} delay= {1000} />
            You can also chat to online users. Pretty cool ye? 
            <Typist.Backspace  count = {51} delay = {1000} />

        </Typist>
        </Typography>  
    </Grid>
    </React.Fragment>
);





export default Body;