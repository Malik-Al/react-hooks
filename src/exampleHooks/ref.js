import React,{useState,useEffect, useRef} from 'react';


const Ref = () => {
    // const [renderCount, setRenderCount] = useState(1)
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        // setRenderCount(prev => prev + 1)
        renderCount.current++
        // console.log(inputRef.current.value)
    })

    useEffect(() => {
        prevValue.current = value
    },[ value])
    const focus = () => inputRef.current.focus()
    return (
        <div>
            <h1>Render count: {renderCount.current}</h1>
            <h1>Render prev count: {prevValue.current}</h1>

            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Focus</button>
        </div>
    );
};

export default Ref;