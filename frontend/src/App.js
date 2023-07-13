import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items');
            setItems(response.data);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <h1>CRUD App</h1>

            <form action="">
                <input
                    type="text"
                    placeholder='N'
                />
                <input
                    type="text"
                    placeholder='N'
                />
            </form>

            <ul>
                { items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
