import React from 'react'
import { useDispatch } from 'react-redux';

import UpDown from '../component/UpDown';

const Parent = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch({ type: 'INCREMENT' });
    };
  return (
    <>
    <div className='mx-auto  d-flex justify-content-center'>
      <button className='btn btn-primary mt-5 fs-1' onClick={handleClick}>Tăng</button>
    </div>
    <UpDown /></>
  )
}

export default Parent