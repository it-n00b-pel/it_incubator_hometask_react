import React, {useState} from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import s from "./HW9.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date?.getHours() + ":" + date?.getMinutes() + ":" + date?.getSeconds() // fix with date
    const stringDate = date?.getFullYear() + ":" + date?.getMonth() + ":" + date?.getDate() // fix with date

    return (

        <div className={s.data_info}>
            <div className={s.stringTime}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <div className={s.button_group}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
