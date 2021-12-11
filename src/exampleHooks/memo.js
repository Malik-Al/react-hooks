import React, {useState, useMemo, useEffect} from 'react';

function complexCompute(num){
    console.log('complexCompute')
    let i = 0
    while(i < 1000000000) i++
    return num * 2
}

const Memo = ()=> {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const style = useMemo(() => ({
        color: colored ? 'red' : 'black'
    }),[colored])


    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('Style change')
    }, [style])

    return (
        <div>
            <h1 style={style}>Вычисляемое свойства: {computed}</h1>
            <button style={{backgroundColor: 'green', color: 'white', padding: '5px'}} onClick={() => setNumber(prev => prev + 1)}>Добваить</button>
            <button style={{backgroundColor: 'red', color: 'white', padding: '5px'}} onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button style={{backgroundColor: 'blue', color: 'white', padding: '5px'}} onClick={() => setColored(prev => !prev)}>Изменить</button>

        </div>
    );
};

export default Memo;