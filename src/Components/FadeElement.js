//Imports
import React from "react";
import Fade from '@material-ui/core/Fade';

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

export default FadeElement;