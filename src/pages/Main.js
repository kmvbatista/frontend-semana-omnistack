import React, {useEffect, useState} from 'react';

import logo  from '../assets/logo.svg'

import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

import api from '../services/api'

import './Main.css'




export default function Main({match}) {

    const [users, setUsers]= useState([]);
    useEffect( () => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {user : match.params.id}
            });
            console.log(response.data);
            setUsers(response.data);
        }
        loadUsers();

    } , [match.params.id]);

    async function handleLike(id) {
        console.log(id);
    }

    async function handleDislike(id) {
        console.log(id);
    }

    return (
        <div className="main-container">
            <img src={logo} alt="tindev"></img>
            <ul>
                {users.map(user => ( 
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name} ></img>
                        <footer>
                            <strong>{user.name}</strong> 
                            <p>{user.bio}</p>
                        </footer>
                        
                        <div className="buttons">
                            <button type="button" onClick= {() => handleDislike(user._id)}>
                                <img src={dislike} alt="Dislike"></img>
                            </button>

                            <button type="button" onClick= {() => handleLike(user._id)} >
                                <img src={like} alt="Like"></img>
                            </button>

                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
} 