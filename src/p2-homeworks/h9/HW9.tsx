import React from "react"
import Clock from "./Clock"
import {homeW} from "../../p1-main/m1-ui/u1-app/App";
import s from "./HW9.module.css"
import AlternativeClock from "./AlternativeClock";

function HW9() {
    return (
        <div>

            <div style={homeW}>homeworks 8</div>

            {/*should work (должно работать)*/}
            <div className={s.context}>
                <Clock/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <br/>
            <AlternativeClock/>
        <br/>
            <hr/>

        </div>
    )
}

export default HW9
