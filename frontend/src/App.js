import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';

const App = () => {
    // const [items, setItems] = useState([]);
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');

    // useEffect(() => {
    //     fetchItems();
    // }, [])

    // const fetchItems = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:8000/api/items');
    //         setItems(response.data);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const createItem = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8000/api/items', {
    //             name: name,
    //             description: description,
    //         });

    //         setItems([...items, response.data]);
    //         setName('');
    //         setDescription('');

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const updateItem = async (id, newName, newDescription) => {
    //     try {
    //         const response = await axios.put(`http://localhost:8000/api/items/${id}`, {
    //             name: newName,
    //             description: newDescription,
    //         });

    //         setItems((prevItems) =>
    //             prevItems.map((item) =>
    //                 item.id === id ? {
    //                     ...item, name: newName, description: newDescription
    //                 } : item
    //             )
    //         );

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const deleteItem = async (id) => {
    //     try {
    //         await axios.delete(`http://localhost:8000/api/items/${id}`);
    //         setItems(items.filter((item) => item.id !== id));

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/login" element={<Login></Login>} />
                        <Route path="/register" element={<Register></Register>} />
                    </Routes>
                </div>
            </Router>

            {/* <h1>CRUD App</h1>

            <form onSubmit={createItem}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    type="text"
                    placeholder='Description'
                    value={description}
                    onChange={ (e) => setDescription(e.target.value) }
                />
                <button type='submit'>Add Item</button>
            </form>

            <ul>
                { items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={ () => deleteItem(item.id) }>Delete</button>
                        <button onClick={ () => {
                                const newName = prompt('Enter new name: ', item.name);
                                const newDescription = prompt('Enter new description: ', item.descrition);

                                if (newName && newDescription) {
                                    updateItem (item.id, newName, newDescription);
                                }
                            }}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul> */}
        </>
    )
}

export default App
