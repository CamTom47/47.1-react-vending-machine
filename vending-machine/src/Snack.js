import React from "react";
import {Link} from 'react-router-dom'


const Snack = ({name}) => {

    return (
        <>
        <h1>Let's eat some {name}'s</h1>
        <Link to="/snacks"> Go Back
        </Link>
        </>
    )

}

export default Snack;