import React, {useState} from 'react'

const Counter = () => {
   const [isClick, setClick]= useState(0);
   const handleclick = () => {setClick (isClick+1)
   }; 

   return(
    <div>
      <p>count_{isClick}</p>
      <button onClick={handleclick}>bbbbbb </button>
    </div>
   )
}

export default Counter
