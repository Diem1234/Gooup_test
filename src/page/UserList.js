import React from "react";
import { users } from './../component/data/users';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [userList, setUserList] = useState(users);
    const navigate = useNavigate();
    const handleDelete = (userId) => {
        // Hiển thị cảnh báo trước khi xóa
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
            // Xóa người dùng khỏi danh sách
            const updatedUsers = userList.filter(u => u.id !== userId);
            // Cập nhật danh sách người dùng
            setUserList(updatedUsers);
        }
    };
  return (
    <div className="container p-5">
      <div className="d-flex justify-content-center">
        <h1 className='mb-3 mt-3' style={{ color: 'red' }}>DANH SÁCH ĐĂNG KÝ</h1>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Email</th>
            <th scope="col">Mật Khẩu</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Tuổi</th>
            <th scope="col">Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
            {userList.map((u)=>(
          <tr key = {u.id}>
            <th scope="row">{u.id}</th>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.password}</td>
            <td>{u.gender}</td>
            <td>{u.age}</td>
            <td>{u.address}</td>
            <td><div>
            <button type="button" onClick={()=>navigate(`/user-edit/${u.id}`)} className="btn btn-primary">Sửa</button> <button type="button" onClick={()=>handleDelete(u.id)} className="btn btn-danger">Xóa</button>
            </div>
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
