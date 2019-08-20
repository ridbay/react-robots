import React from 'react'
import './card.style.css'
export const Card = (props)=> (
    <div className='card-container'>
        <img alt='monsters' src={`https://robohash.org/${props.monster.id}.png?set=set2&size=180x180`} />
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
        <p>{props.monster.monstername}</p>
        <p>{props.monster.phone}</p>
        <p>{props.monster.website}</p>
    </div>
    
)