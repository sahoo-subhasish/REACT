import React, { useState } from 'react';

function Card({name, age = 56 }) {
    return ( 
        <h1 className='bg-green-600 text-black mb-4'>{name} - Age: {age}</h1>
     );
}

export default Card;