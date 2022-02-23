import React from 'react'
import {AffairType} from "./HW2";
import  s from "./Affairs.module.css"
import a  from "./free-icon-garbage-158725.png"
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.mainBlock}>
            <div className={s.nameTask}>{props.affair.name}</div>
            <div className={s.prioriryTask}>{props.affair.priority}</div>
            {/*<button onClick={deleteCallback}>x</button>*/}
            <img src={a} alt={""} onClick={deleteCallback}/>
        </div>
    )
}

export default Affair
