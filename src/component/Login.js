import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import  jwt_decode  from 'jwt-decode';
// import { useDispatch } from "react-redux";
// import { loginFailure, loginSuccess } from "../actions/authActions";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";


const Login = () => {
  const [verifed, setVerifed] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isTablet, setIsTablet] = useState(false);
  // const [errorEmail, setErrorEmail] = useState('');
  // const [errorPassword, setErrorPassword] = useState('');
   const navigate = useNavigate("");
  //const dispatch = useDispatch();

  const { email, password, setEmail, setPassword, handleLogin,errorEmail,setErrorEmail,errorPassword,setErrorPassword } = useContext(AuthContext);


  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 768);
    };

    handleResize();
  

    window.addEventListener('resize', handleResize,{ passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }

  const handleLogins = (e) => {
    e.preventDefault();
    // Gửi dữ liệu đăng nhập đến server hoặc xử lý nó ở phía client tại đây
    console.log('Email:', email);
    console.log('Password:', password);

    setErrorEmail('');
    setErrorPassword('');

    if (!email) {
      setErrorEmail('Không được bỏ trống!');
    }

    if (!password) {
      setErrorPassword('Không được bỏ trống!');
    }
    handleLogin();
  //   // Xử lý thành công đăng nhập
  //   const storedUser = JSON.parse(localStorage.getItem("users"));
  //   if(storedUser){
  //     const user = storedUser.find((user) => user.email === email && user.password === password);

  //     if (user) {
  //       // Xử lý đăng nhập thành công
  //       dispatch(loginSuccess(user));
  //       alert('Đăng nhập thành công!');
  //       // Chuyển đến trang Dashboard
    navigate('/dashboard');
  //     } else {
  //       setErrorEmail('Email không đúng!');
  //       setErrorPassword('Mật khẩu không đúng!');
  //       // Xử lý đăng nhập không thành công
  //       // dispatch(loginFailure('Sai thông tin đăng nhập, vui lòng thử lại!'));
  //       alert('Sai thông tin đăng nhập, vui lòng thử lại!');
  //     } 
  //  }else{
  //     alert('Chưa có tài khoản!');}

  };

  return (
    <div className="container">
      <div className="row mt-lg-3 rounded-2 d-flex justify-content-center mx-auto">
        <div className="d-flex justify-content-center">
          <img
            className=""
            src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
            alt=""
            width={"150px"}
            height={"150px"}
          />
        </div>
        <div className="col-lg-4 col-md-12 border p-lg-5">
          <h3>ĐĂNG NHẬP</h3>
          <p>Đăng nhập tài khoản của bạn</p>
          <form className="">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <span style={{ color: "red" }}>{errorEmail}</span>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <span style={{ color: "red" }}>{errorPassword}</span>
            </div>
            <div className="mb-3">
              <ReCAPTCHA
                className="mb-3"
                sitekey={process.env.REACT_APP_SITEKEY}
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              onClick={handleLogins}
              className="btn btn-primary"
              disabled={!verifed}
            >
              ĐĂNG NHẬP
            </button>
            <NavLink
              type="button"
              className="btn btn-primary float-end"
              to="/signup"
            >
              ĐĂNG KÝ
            </NavLink>
            <div className="mb-3 mt-2">
            <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENTID}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const details = jwt_decode(credentialResponse.credential);
                  console.log(details);
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider></div>
          </form>
        </div>
        <div
          className={
            isTablet ? "d-none" : "col-lg-4  border d-flex align-items-center "
          }
        >
          <div className="mx-auto">
            <img
              className=""
              src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
              alt=""
              width={"100px"}
              height={"100px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
