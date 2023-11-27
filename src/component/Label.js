import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { useSelector } from 'react-redux';


const Label = ({className}) => {
  //const {count}= useContext(CounterContext)
  const count = useSelector(state => state.count);
  return (
    <div className=''>
        <label className={className} style={{ width : '200px', height: '200px', fontSize: '170px'}}>{count}</label>
    </div>
  )
}

export default Label