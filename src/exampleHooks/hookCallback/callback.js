import React, {useState, useCallback} from 'react';
import ItemList from "./itemList";


const Callback = ()=> {
    const [count, setCounter] = useState(1)
    const [colored, setColored] = useState(false)

    const style = {
        color: colored ? 'red' : 'black'
    }

    const generateFromApi = useCallback((index) => {
        return new Array(count).fill('').map((_, i) => `element ${i + index}`)
    }, [count])

    return (
        <div>
            <h1 style={style}>Вычисляемое свойства: {count}</h1>
            <button style={{backgroundColor: 'green', color: 'white', padding: '5px'}} onClick={() => setCounter(prev => prev + 1)}>Добваить</button>
            <button style={{backgroundColor: 'red', color: 'white', padding: '5px'}} onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemList getItems={generateFromApi}/>
        </div>
    );
};

export default Callback;