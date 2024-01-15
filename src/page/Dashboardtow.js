import React from 'react'
import { connect } from 'react-redux';
import { logout } from "../actions/authActions";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
const Dashboardtow = () => {
  const navigate = useNavigate();
  const {handleLogout} = useContext(AuthContext)
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (!storedUser) {
      // Người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập
      navigate("/signin");
    }
  }, []);

  const handleLogouts = () => {
    handleLogout();
    navigate("/signin");
  };
  return (
    <div >
      <h1 className='mx-auto mt-5 d-flex justify-content-center'>{t("title")}</h1>
      <div style={{ height: 'auto', width: '20%'}} className='mx-auto mt-3'>
      <select class="form-select" aria-label="Default select example" onChange={changeLanguage}>
        <option value="eng">English</option>
        <option value="vie">Vietnamese</option>
      </select></div>
      {/* <button className='btn btn-danger mx-auto  d-flex justify-content-center' onClick={()=>navigate('/profile')}>Profile</button> 
      <button className='btn btn-danger mx-auto  d-flex justify-content-center' onClick={handleLogouts}>Logout</button>  */}
    </div>
  )
}
export default Dashboardtow
