import React, {useState} from 'react'
import Affairs from './Affairs'
import {homeW} from "../../p1-main/m1-ui/u1-app/App";

// types
export type AffairPriorityType = "high" | "middle" | "low" // need to fix any
export type AffairType = { _id: number, name: string, priority: AffairPriorityType } // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any

    if (filter === 'low') return affairs.filter((aff: AffairType) => aff.priority === "low")
    else if (filter === 'middle') return affairs.filter((aff: AffairType) => aff.priority === "middle")
    else if (filter === 'high') return affairs.filter((aff: AffairType) => aff.priority === "high")
    else return affairs // need to fix
}

export const deleteAffair = (affairs: any, _id: any): Array<AffairType> => { // need to fix any
    return affairs.filter((aff: AffairType) => aff._id !== _id);// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <div style={homeW}>homeworks 2</div>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}

        </div>
    )
}

export default HW2
