import React from 'react'
import Label from './Label'
import { useState } from 'react';

const UpDown = () => {
    const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className='mx-auto mt-5'>
        <Label number={count} className={'mx-auto d-flex justify-content-center mt-5'}/>
        <div className='d-flex justify-content-center mt-3'>
          <button type="button" onClick={handleDecrement} class="btn btn-danger float-end fs-1 me-3 ps-4 pe-4">-</button>  
          <button type="button" onClick={handleIncrement} class="btn btn-primary float-start fs-1 ps-4 pe-4" >+</button>
        </div>
        
    </div>
  )
}

export default UpDown