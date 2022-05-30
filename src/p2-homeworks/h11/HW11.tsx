import React, {useState} from "react"
import SuperRange from "./common/c7-SuperRange/SuperRange"
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange"
import {homeW} from "../../p1-main/m1-ui/u1-app/App";
import s from './common/h11.module.css'

function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(100)

    return (
        <div >

            <div style={homeW}>homeworks 11</div>

            {/*should work (должно работать)*/}
            <div className={s.context}>
                <span>{value1}</span>
                <SuperRange value1={value1} value2={value2} onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
                <span>{value1}</span>
                <SuperDoubleRange value1={value1} value2={value2} onChangeRangeV1={setValue1}
                                  onChangeRangeV2={setValue2}/>

                <span>{value2}</span>
            </div>




            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
