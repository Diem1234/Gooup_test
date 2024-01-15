import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { users } from "./../component/data/users";

const Profile = (props) => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  //const userList = user.find(u => u.id === parseInt(id));
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [gender, setGender] = useState(user.gender);
  const [age, setAge] = useState(user.age);
  const [address, setAddress] = useState(user.address);

  const navigate = useNavigate();
  const hanhdleUpdateUser = (e) => {
    e.preventDefault();

    const updatedUserList = [
      {
        ...user,
        name: name,
        email: email,
        password: password,
        gender: gender,
        age: age,
        address: address,
      },
    ];

    localStorage.setItem("user", JSON.stringify(updatedUserList));
    alert('Cập nhật thành công!')
  };
  // Navigate back to the user list page
  //   navigate('/userlist');

  return (
    <div className="row mt-lg-3 rounded-2 d-flex justify-content-center">
      <div className="d-flex justify-content-center">
        <h1 className="mb-3 mt-3" style={{ color: "red" }}>
          DEMO REACT BOOTSTRAP
        </h1>
      </div>
      {/* <div className="col-lg-4  border shadow d-flex align-items-center ">
        <div className="mx-auto">
          <img
            className=""
            src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
            alt=""
            width={"150px"}
            height={"150px"}
          />
        </div>
      </div> */}
      <div className="col-lg-4 col-md-12 border shadow p-5">
        <form className="">
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName1"
              placeholder="Họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <select
              id="inputState"
              name="gender"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Địa chỉ"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={hanhdleUpdateUser}
          >
            Cập nhật
          </button>
          <NavLink
            to="/dashboard"
            type="button"
            className="btn btn-primary float-end"
          >
            Quay về
          </NavLink>
        </form>
      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr className="m-3">
            
            <th scope="col">Họ và tên</th>
            <th scope="col">Email</th>
            <th scope="col">Mật Khẩu</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Tuổi</th>
            <th scope="col">Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          
          <tr className="m-3">
          
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{gender}</td>
            <td>{age}</td>
            <td>{address}</td>
            <td><div>
            <button type="button"  className="btn btn-primary">Sửa</button> 
            <button type="button"  className="btn btn-danger">Xóa</button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
