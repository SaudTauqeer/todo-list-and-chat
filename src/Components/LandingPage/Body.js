//Imports
import React, { Component } from "react";
import {
    Grid,
    Typography,

} from "@material-ui/core";
import Typist from 'react-typist';
import FadeText from "./FadeText";


const style = {
    containerTop : {padding: 20, marginTop: "20em"}
};





class Body extends Component {



   onAnimationDone = () => (
        <React.Fragment>
        ss
        </React.Fragment>
    );

    render () {
        return (
            <React.Fragment>
            <Grid container 
            justify="center"
            style={style.containerTop}
            >
                <Typography variant="h2">
                <Typist 
                cursor={{hideWhenDone: true}}
                onTypingDone={this.onAnimationDone}
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
                <FadeText>
                    <div>CHildren test</div>
                </FadeText>
            </React.Fragment>
        );
    }


}





export default Body;