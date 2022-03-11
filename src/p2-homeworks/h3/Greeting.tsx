import React, {ChangeEvent} from "react"
import s from "./Greeting.module.css"

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    SOME_BOOLEAN: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, SOME_BOOLEAN} // деструктуризация пропсов
) => {
    const inputClass = error.length > 0 ? s.error : "" // need to fix with (?:)
    console.log(inputClass)
    return (
        <div className={s.someClass}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>

            <button onClick={addUser} disabled={!SOME_BOOLEAN}>add</button>
            <span>{totalUsers}</span>
            <div>
                {error && "Введи норм имя...хули ты, пёс"}
            </div>
        </div>
    )
}

export default Greeting
