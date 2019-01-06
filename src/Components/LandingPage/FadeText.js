
import React from "react";
import Fade from '@material-ui/core/Fade';
import {Button} from "@material-ui/core";

const FadeText = (props) => {
    return (
        <React.Fragment>
            <Fade
            children={props.children}
            in={true}
            timeout={{enter: 2000}}
            > 
            </Fade>
        </React.Fragment>
    );
};



export default FadeText;