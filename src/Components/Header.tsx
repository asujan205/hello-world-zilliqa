import React, { ReactFragment }  from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

type props={
    setShowSignUp(showSignUp: boolean): void;

}
const Header:React.FC<props>=(props)=>
{
    const { setShowSignUp}= props;
    return(
        <>
        
        </>
    )
}

export default Header