import React from 'react';
import './cart.style.css';

export const Cart = (props)=>{
   return (<div  className='cart'>
            <img src ={`https://robohash.org/${props.monster.id}?set=set4&size=150x150`} alt="monster"/ >
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
            
            </div>
            )
}