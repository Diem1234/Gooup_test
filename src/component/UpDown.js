import React from 'react'
import Label from './Label'
import { useState } from 'react';
import Button from './Button';
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const UpDown = () => {
  //   const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };
  const { incrementCount ,decrementCount} = useContext(CounterContext);
  return (
    <div className='mt-5'>
        <div className='mx-auto  d-flex justify-content-center'>
          {/* bài tập 7 */}
          {/* <button type="button" onClick={handleDecrement} className="btn btn-danger float-end fs-1 me-3 ps-4 pe-4">-</button>  
          <button type="button" onClick={handleIncrement} className="btn btn-primary float-start fs-1 ps-4 pe-4" >+</button> */}
          {/* bài tập 8 */}
          {/* <Button className="btn btn-danger fs-1 me-3 ps-4 pe-4" onClick={handleDecrement} value='-'/>
          <Button className="btn btn-primary fs-1 ps-4 pe-4" onClick={handleIncrement} value='+'/>
         */}
        {/* <Label number={count} className={'mx-auto d-flex justify-content-center mt-5'}/> */}
         {/* Bài tập 9 */}
        {/* <Button onClick={handleIncrement} className='btn btn-primary fs-1 ps-4 pe-4 ms-5 mt-3' value='Tăng' classe='mx-auto d-flex justify-content-center mt-5' count={count}/> */}
        {/* bài tập 10 */}
          {/* <Label className={'mx-auto d-flex justify-content-center mb-5'}/>  */}
         {/* bài tập 11 12 13   */}
         {/* <button className='btn btn-primary  fs-1 mx-auto  d-flex justify-content-center' onClick={incrementCount}>Tăng</button> */}
          {/* <Button className={'btn btn-primary  fs-1 mx-auto  d-flex justify-content-center'} value={'Tăng'} onClick={incrementCount}/>
          <Button className={'btn btn-primary  fs-1 mx-auto  d-flex justify-content-center'} value={'Giảm'} onClick={decrementCount}/> */}
          
        </div><Label className={'mx-auto d-flex justify-content-center mb-5'}/> 
    </div>
  )
}

export default UpDown