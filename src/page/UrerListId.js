import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { users } from './../component/data/users';

const UrerListId = (props) => {
    const { id } = useParams();
    const user = users.find(u => u.id === parseInt(id));
    const navigate = useNavigate();
    
  return (
    <div className="row mt-lg-3 rounded-2 d-flex justify-content-center">
      <div className="d-flex justify-content-center">
      <h1 className='mb-3 mt-3' style={{ color: 'red' }}>CẬP NHẬT</h1>
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
        <form className="" >
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName1"
              placeholder="Họ và tên"
              value={user.name}
              
            />
            {/* <span style={{ color: 'red' }}>{errorEmail}</span> */}
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={user.email}  
              
              
            />
            {/* <span style={{ color: 'red' }}>{errorEmail}</span> */}
        
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="current-password"
              placeholder="Password"
              value={user.password} 
              
              
            />
           
          </div>
          <div className="mb-3">
            <select id="inputState" name="gender" className="form-select"  
            value={user.gender} 
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
              value={user.age} 
            />
             
          </div>
          <div className="mb-3">
            <input
              type="text" 
              name="address"
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Địa chỉ"
              value={user.address} 
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary" onClick={()=>navigate('/userlist')}
          >
            Cập nhật
          </button>
          <NavLink to='/userlist' type="button" 
             className="btn btn-primary float-end" >
            Quay về
          </NavLink>
        </form>
        
      </div>
    </div>
  )
}

export default UrerListId