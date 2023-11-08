import React from 'react'

const Label = ({number,className}) => {
  return (
    <div className='mt-5'>
        <label className={className} style={{ width : '200px', height: '200px', fontSize: '170px'}}>{number}</label>
    </div>
  )
}

export default Label