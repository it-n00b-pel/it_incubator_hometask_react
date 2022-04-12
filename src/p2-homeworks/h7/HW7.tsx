import React, {useState} from "react"
import SuperSelect from "./common/c5-SuperSelect/SuperSelect"
import SuperRadio from "./common/c6-SuperRadio/SuperRadio"
import {homeW} from "../../p1-main/m1-ui/u1-app/App";
import s from './HW7.module.css'

const arr = ["x", "y", "z"]

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
            <div style={homeW}>homeworks 7</div>

            {/*should work (должно работать)*/}
            <div className={s.context}>
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={"radio"}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}

        </div>
    )
}

export default HW7
