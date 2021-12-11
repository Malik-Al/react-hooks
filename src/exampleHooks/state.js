import React, {useState} from 'react';

const State = () => {
    const [counter, setCounter] = useState(0)
    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const updateTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'new title'
            }
        })
    }

    return (
        <div>
            <div style={{display: 'flex'}}>
                <button onClick={() => increment()}>increment</button>
                <button onClick={() => decrement()}>decrement</button>
                <div style={{fontSize: '2rem'}}>Счетчик: {counter}</div>
            </div>
            <button onClick={() => updateTitle()}>Изменить</button>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>

    );
};

export default State;