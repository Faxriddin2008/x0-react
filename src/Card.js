import React from "react";
import { Component } from "react";
// import {sounds} from "./assets/audios";

import error from "../src/assets/audios/error.wav"


function X0({id, value, clickHandler, stopped , isWinner}){
    function errorr(){
        const errorPlay = new Audio(error).play()
    }
    return(
        <div onClick={value == "" && stopped == false ? clickHandler : errorr} className={`card ${isWinner == true ? "win" : ""}`}>
            <p>{value}</p>
        </div>
    )
}

export default X0;