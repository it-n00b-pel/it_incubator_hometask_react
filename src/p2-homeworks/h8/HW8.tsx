import React, {useState} from "react"
import {homeWorkReducer} from "./bll/homeWorkReducer"
import SuperButton from "../../../../../Friday/hw_14/src/components/common/c2-SuperButton/SuperButton"
import {homeW} from "../../p1-main/m1-ui/u1-app/App";
import s from "./HW8.module.css"
export type UserType = {
    _id: number,
    name: string,
    age: number
}

export type SortByNameAT = {
    type: "sort",
    payload: "up" | "down"
}

export type SortByAgeAT = {
    type: "check",
    payload: number
}

export type ActionType = SortByNameAT | SortByAgeAT

const initialPeople: UserType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.person_info}>

            <div>{p.name}</div>
            <div><b>{p.age}</b></div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div className={s.context}>

            <div style={homeW}>homeworks 8</div>

            {/*should work (должно работать)*/}
            {finalPeople}

            <div className={s.button_group}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={sortAge}>sort age</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    )
}

export default HW8
