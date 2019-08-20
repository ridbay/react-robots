import React from 'react'
import './card-list.style.css'
import {Card} from '../card/card.component'

let CardList =(props)=> (
    <div className='card-list'>
        {props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
    </div>
        
)

export default CardList;