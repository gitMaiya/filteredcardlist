import React from "react";
const Scoll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: 'ipx solid black', height: '500px'}}>
         {props.children}
        </div>
    )
}

export default Scoll; 