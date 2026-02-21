import React, { useState } from 'react';

function Button({setColor, color}) {

    return ( 
        <div className='flex flex-wrap bg-black text-white px-2 py-1 rounded-3xl mr-2 mb-2'>
            <button onClick={() => setColor(color)}>{color}</button>
          </div>
     );
}

export default Button;