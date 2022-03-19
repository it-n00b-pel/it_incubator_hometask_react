import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import {homeW} from "../../p1-main/m1-ui/u1-app/App";
import h6 from "./HW6.module.css"
function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))

    }

    return (
        <div>

            <div style={homeW}>homeworks 6</div>

            {/*should work (должно работать)*/}
            <div className={h6.hw6}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div className={h6.btn}><SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton></div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
