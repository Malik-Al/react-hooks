import React, {useEffect, useState} from 'react';
import '../../index.css'

function useLogger(value){
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue){
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

const CustomHook = () => {
    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value)

    const clr = () => {
        input.clear()
        lastName.clear()
    }
    return (
        <div className={'container'}>
            <input type="text" {...input.bind}/>
            <input type="text" {...lastName.bind}/>
            <hr/>
            <h1>{input.value}</h1>
            <h1>{lastName.value}</h1>
            <button onClick={() => clr()}>Clear</button>
        </div>
    );
};

export default CustomHook;