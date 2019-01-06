//Imports
import React from "react";
import Grow from "@material-ui/core/Grow";

const GrowElement = (props) => (
    <React.Fragment>
        <Grow
        children={props.children}
        in={props.visible}
        timeout={{enter: props.timeout}}
        > 
        </Grow>
    </React.Fragment>
  );
  

export default GrowElement;