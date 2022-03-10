import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5-rrd-v6/HW5";
import {BrowserRouter} from "react-router-dom";


export const homeW = {
    margin: "0 auto",
    width: "400px",
    fontSize: "36px",
    padding: "10px",
    fontWeight:"900",
    color: "black",
    webkitTextStroke: "1px gray",
    textShadow: ".07em 0 black"
}
function App() {

    return (

        <div className={s.App}>

            {/*<div style={homeW}>react homeworks:</div>*/}
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5 />

        </div>
    )
}

export default App
