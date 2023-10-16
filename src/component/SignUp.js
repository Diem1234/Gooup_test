import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SignUp = () => {
    const [verifed, setVerifed] = useState(false);
  const navigate = useNavigate();
  

  
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   navigate('/signin')
  //   // Gửi dữ liệu đăng nhập đến server hoặc xử lý nó ở phía client tại đây
    
  // }; 
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      gender: '',
      age: '',
      address: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Vui lòng nhập họ và tên!'),
      email: Yup.string().email('Email không hợp lệ!').required('Vui lòng nhập email!'),
      password: Yup.string().required('Vui lòng nhập mật khẩu!'),
      age: Yup.number().min(1,'Không được nhỏ hơn 0!').required('Vui lòng nhập tuổi!'),
      address: Yup.string().required('Vui lòng nhập địa chỉ!')
    }),
    onSubmit: (values) => {
      // Xử lý logic khi submit form
      //navigate('/signin')
      console.log(values);
    }
  });

  return (
    <div className="row mt-lg-3 rounded-2 d-flex justify-content-center">
      <div className="d-flex justify-content-center">
      <h1 className='mb-3 mt-3' style={{ color: 'red' }}>ĐĂNG KÝ</h1>
      </div>
      <div
        className= "col-lg-4  border shadow d-flex align-items-center "
      >
        <div className="mx-auto">
          <img
            className=""
            src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
            alt=""
            width={"150px"}
            height={"150px"}
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-12 border shadow p-5">
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName1"
              placeholder="Họ và tên"
              value={formik.values.name} onChange={formik.handleChange}
            />
            {/* <span style={{ color: 'red' }}>{errorEmail}</span> */}
            {formik.touched.name && formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={formik.values.email} onChange={formik.handleChange}
            />
            {/* <span style={{ color: 'red' }}>{errorEmail}</span> */}
            {formik.touched.email && formik.errors.email && <span style={{ color: 'red' }}>{formik.errors.email}</span>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="current-password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && <span style={{ color: 'red' }}>{formik.errors.password}</span>}
          </div>
          <div className="mb-3">
            <select id="inputState" name="gender" className="form-select"  value={formik.values.gender} onChange={formik.handleChange}
          
            >
              <option selected>Giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            {/* <span style={{ color: 'red' }}>{errorEmail}</span> */}
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="age"
              className="form-control"
              id="exampleInputAge1"
              placeholder="Tuổi"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
             {formik.touched.age && formik.errors.age && <span style={{ color: 'red' }}>{formik.errors.age}</span>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Địa chỉ"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
           {formik.touched.address && formik.errors.address && <span style={{ color: 'red' }}>{formik.errors.address}</span>}
          </div>
          <div className="mb-3">
            <ReCAPTCHA
              className="mb-3"
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!verifed}
          >
            ĐĂNG KÝ
          </button>
          <NavLink to='/signin' type="button" 
             className="btn btn-primary float-end" >
            Quay về
          </NavLink>
        </form>
        
      </div>
    </div>
  );
}

export default SignUp