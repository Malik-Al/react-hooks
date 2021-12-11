import React, {useEffect, useState} from 'react';

const ItemList = ({getItems}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        // const newItems = getItems()
        setItems(getItems(48))
        console.log('render')
    }, [getItems])

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    );
};

export default ItemList;