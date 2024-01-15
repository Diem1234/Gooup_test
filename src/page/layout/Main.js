import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import {Helmet} from "react-helmet";

const Main = ({children,title}) => {
  return (
    <div>
        <Helmet>
        
        <title>{title}</title>
    
      </Helmet>
        <Header/>
        <main >
           <Outlet/> : {children}
        </main>
    </div>
  )
}

export default Main