import React, {useState} from 'react';
import {Checkbox} from 'antd';
import {RequestsAPI} from './RequestsAPI';


const Request: React.FC = () => {
    let [isCheck, setCheck] = useState<boolean>(false);
    let [message, setMessage] = useState('');
    const onChangeHandler = () => {
        setCheck(!isCheck);
    };

    const onClickHandler = () => {
        RequestsAPI.post(isCheck).then(res => {
            setMessage(res.data.errorText);
        })
            .catch(error=>{
          setMessage(error.response.data.errorText)
        })
    };

    return (
        <div style={{textAlign:"center"}} >
            <Checkbox value={isCheck} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>post</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Request;