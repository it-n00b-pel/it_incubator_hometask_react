import React from 'react'
import M from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div className={M.message}>
            <div className={M.avatar}><img src={props.avatar} alt=""/></div>
            <div className={M.message_text}>
                <div className={M.name}>{props.name}</div>
                <div className={M.text}>{props.message}</div>
                <div className={M.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
