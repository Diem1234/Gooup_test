import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollUpButton from 'react-scroll-up-button';








const Main = ({ children, title }) => {
  

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="mb-5">{children ? children : <Outlet />}</main>

      <ScrollUpButton />


    </div>
  );
};

export default Main;
