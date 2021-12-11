import React from 'react';
import '../../index.css'
import Main from "./main";
import Alert from "./alert";
import {AlertProvider} from "./alertContext";


const Context = () => {

    return (
        <AlertProvider>
            <div className={'container'}>
                <Alert/>
                <Main toggle={() => {}}/>
            </div>
        </AlertProvider>
    );
};

export default Context;