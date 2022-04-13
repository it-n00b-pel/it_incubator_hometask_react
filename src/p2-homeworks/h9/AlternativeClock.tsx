import React, {useState} from "react"
import s from './AlternativeClock.module.css'
function AlternativeClock() {

    const [date, setDate] = useState<Date>()


    const start = () => {
        window.setInterval(() => {
            setDate(new Date())
        }, 1000)

    }
    const days = [
        'SUN','MON','TUE','WED','THU','FRI','SAT'
    ];
    const stringTime = date?.getHours() + ":" + date?.getMinutes() + ":" + date?.getSeconds() // fix with date
    const year = date?.getFullYear() // fix with date
    const mounce = date?.getMonth() // fix with date
    const dat = date?.getDate() // fix with date
    const day = days[Number(date?.getDay())]
    return (

        <div className={s.alt_clock}>

           <div className={s.group_clock}>
               <div className={s.main_clock}>
                   {start()}
                   {stringTime}

               </div>
               <hr/>
               <div className={s.dop_info}>
                   <div >
                       <div className={s.text}>DATE  </div>
                       <div className={s.text_data}>{dat} </div>
                   </div>
                   <div className={s.mini_block}> </div>
                   <div>
                       <div className={s.text}>MONTH</div>
                       <div className={s.text_data}>{mounce}</div>
                   </div>
                   <div className={s.mini_block}> </div>
                   <div>
                       <div className={s.text}>YEAR</div>
                       <div className={s.text_data}>{year}</div>
                   </div>
                   <div className={s.mini_block}> </div>
                   <div>
                       <div className={s.text}>DAT</div>
                       <div className={s.text_data}>{day}</div>
                   </div>

               </div>
           </div>

        </div>
    )
}

export default AlternativeClock
