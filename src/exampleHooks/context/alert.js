import React from 'react';
import {useAlert} from "./alertContext";


const Alert = () => {
    const alert = useAlert()

    if(!alert.visible) return null
    return (
        <div className={'alert-back'} onClick={alert.toggle}>
            <p>Это оченьважное сообщение</p>
        </div>
    );
};

export default Alert;