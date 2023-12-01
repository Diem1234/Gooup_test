import React from 'react'
import { connect } from 'react-redux';
import { logout } from "../actions/authActions";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

const Dashboard = ({ storedUser, logout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (!storedUser) {
      // Người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập
      navigate("/signin");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("users");
    logout();
    navigate("/signin");
  };
  return (
    <div className='mx-auto  d-flex justify-content-center'>
      <h1 >Hello , I'm Admin</h1>
      <button className='btn btn-primary float-end' onClick={handleLogout}>Logout</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.auth.users,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
