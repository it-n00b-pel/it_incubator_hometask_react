import React from 'react'
import Message from "./Message";
import {homeW} from "../../p1-main/m1-ui/u1-app/App";

const messageData = {
    avatar: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png',
    name: 'Some Body',
    message: 'Какой-то очень важдый текст в сообщении',
    time: '22:00',
}

function HW1() {


    return (
        <div>
            <hr/>
            <div style={homeW}>homeworks 1</div>

            {/*should work (должно работать)*/}

            <Message
                // avatar={messageData.avatar}
                // name={messageData.name}
                // message={messageData.message}
                // time={messageData.time}
                {...messageData}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}


export default HW1
