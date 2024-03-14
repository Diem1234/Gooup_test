import React, { createContext, useRef, useState } from 'react';
import { showToast } from '../utils/utils';


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const storedUser = JSON.parse(localStorage.getItem("users"));
  const handleLogin = () => {
    
    const storedUser = JSON.parse(localStorage.getItem("users"));
    if(storedUser){
      const user = storedUser.find((user) => user.email === email && user.password === password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        // Xử lý đăng nhập thành công
        setIsLoggedIn(true)
        alert('Đăng nhập thành công!');
        // Chuyển đến trang Dashboard
      } else {
        setErrorEmail('Email không đúng!');
        setErrorPassword('Mật khẩu không đúng!');
        // Xử lý đăng nhập không thành công
        // dispatch(loginFailure('Sai thông tin đăng nhập, vui lòng thử lại!'))
        
      } 
   }else{
    alert('Chưa có tài khoản')}
      
  };

  const handleLogout = () => {
    // Xử lý đăng xuất
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ email, password, isLoggedIn, setEmail, setPassword, handleLogin, handleLogout ,errorEmail,setErrorEmail,errorPassword,setErrorPassword}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;