import React from 'react'
import './card.style.css'
export const Card = (props)=> (
    <div className='card-container'>
        <img alt='monsters' src={`https://robohash.org/${props.monster.id}.png?set=set2&size=180x180`} />
        <h2>Name: {props.monster.name}</h2>
        <p>Email: {props.monster.email}</p>
        <p>Username: {props.monster.username}</p>
        <p>Phone: {props.monster.phone}</p>
        <p>Address: {props.monster.address.street}</p>
        <p>Website: {props.monster.website}</p>
    </div>
    
)