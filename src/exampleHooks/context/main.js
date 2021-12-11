import React from 'react';
import {useAlert} from "./alertContext";

const Main = () => {
    const {toggle} = useAlert()
    return (
        <>
            <h1>Hello Context</h1>
            <button onClick={toggle} style={{backgroundColor: 'green', color: 'white', padding: '5px 7px'}}>Показать alert</button>
        </>
    );
};

export default Main;