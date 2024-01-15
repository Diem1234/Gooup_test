import React from 'react'
import { connect } from 'react-redux';
import { logout } from "../actions/authActions";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import Main from './layout/Main';

const Dashboard = ({ storedUser, logout }) => {
  const navigate = useNavigate();
  const {handleLogout} = useContext(AuthContext)
  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (!storedUser) {
      // Người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập
      navigate("/signin");
    }
  }, []);

  const handleLogouts = () => {
    localStorage.removeItem("users");
    logout();
    navigate("/signin");
  };
  return (
    <Main title={'Home'} >
      <h1 className='mx-auto  d-flex justify-content-center'>Home</h1>
      <button className='btn btn-primary mx-auto  d-flex justify-content-center' onClick={handleLogouts}>Logout</button>
    </Main>
  )
}

const mapStateToProps = (state) => ({
  users: state.auth.users,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
