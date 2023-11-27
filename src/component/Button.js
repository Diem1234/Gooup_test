import React, { useContext } from 'react'
import Label from './Label';
import { CounterContext } from '../context/CounterContext';

const Button = ({className,classe,value,count,onClick}) => {
 
  return (
    <div>
        <button type="button" onClick={onClick} className={className}>{value}</button>
    </div>
  )
}

export default Button