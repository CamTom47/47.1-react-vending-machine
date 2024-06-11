import React from "react";
import { Link } from 'react-router-dom'


const VendingMachine = () => {

    return (
        <>
            <h1> Vending Machine:</h1>
            <p>Pick something you'd like to eat</p>
            <div>
            <Link to="/snacks/oreos">
            Oreos
            </Link>
                
            </div>
            <div>
            <Link to="/snacks/carrots">
            Carrots
            </Link>

            </div>
            <div>
            <Link to="/snacks/turkeyleg">
            Turkey Leg
            </Link>

            </div>
        </>
    )

}

export default VendingMachine;