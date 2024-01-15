import React from 'react'
import Main from './layout/Main'
import dMaulienke from '../images/d-maulienke.png';

const Images = () => {
  return (
    <Main title={"images"}>
      <div className="mt-5 d-flex mx-auto" style={{width: '50%', height: 'auto'}}>
        <img
          classname="float-start"
          src={dMaulienke}
        alt='src/images/d-maulienke.png'
          width="50%"
          height="{'auto'}"
        />
        <img
          classname="float-end"
          src="d-donsac.png"
          alt='public/images/d-donsac.png'
          width="50%"
          height="{'auto'}"
        />
      </div>
    </Main>
  );
}

export default Images