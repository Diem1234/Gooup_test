import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AddStudient from "./AddStudient";
import * as Yup from "yup";
import { useFormik } from "formik";
import EditStudient from "./EditStudient";
import  { showToast } from "../../utils/utils";
import { Toast } from "primereact/toast";
import Layout from "../layout/Layout";
import { CButton, CForm, CFormInput } from "@coreui/react";
import { UserContext, UserProvider } from "../../context/UserContext";
import useToast from "../../component/useHooks/useToast";


const UserLists = () => {
  // const toast = useRef(null);
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [selected, setSelected] = useState('');
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUserList, setFilteredUserList] = useState([]);
  const searchTimeout = useRef(null);
  const { userList, handleDelete,handleUpdateUser,handleAddUser,setUserList } = useContext(UserContext);
 

  useEffect(() => {
    const updatedUserList = JSON.parse(localStorage.getItem("studients"));
    setUserList(updatedUserList);
  }, []); // Mảng phụ thuộc rỗng đảm bảo hiệu khi render banu ứng chỉ chạy một lần, sa đầu

  const handleSearch = (query) => {
    //xóa bỏ bất kỳ timeout nào đang chạy hiện tại
    clearTimeout(searchTimeout.current);
    //tạo một timeout mới với thời gian chờ là 300ms bằng cách sử dụng setTimeout
    searchTimeout.current = setTimeout(() => {
      //danh sách người dùng sẽ được lọc và chỉ giữ lại những người dùng 
      const filtered = userList.filter((user) => {
        return user.name.toLowerCase().includes(query.toLowerCase());
      });
      // Cập nhật dữ liệu 
      setFilteredUserList(filtered);
    }, 300);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // const updatedUserList = userList.map((u) => {
    //   if (u.id === selected.id) {
    //     return {
    //       ...u,
    //       id: id,
    //       name: name,
    //       age: age,
    //     };
    //   }


    //   return u;
    // });
    
    // setUserList(updatedUserList);
    // localStorage.setItem("studients", JSON.stringify(updatedUserList));
    handleUpdateUser(selected.id,name,age);
    const messageContent = `User with ID ${selected.id} has been updated successfully.`;
    // showToast(toast, 'success', 'Success', messageContent);
    // toast.showSuccess(messageContent);
    // Reset state values
    setId("");
    setName("");
    setAge("");
    
    // Navigate back to the user list page
    navigate("/student");
  };

  const handleDeleteUser = (userId) => {
    // Hiển thị cảnh báo trước khi xóa
    handleDelete(userId);
    // showToast(toast, 'success', 'Success', 'Deleted successfully!');
  };

  const formik = useFormik({
    initialValues: {
      //id: nextId, // Thêm trường id với giá trị là id tiếp theo
      id: "",
      name: "",
      age: "",
    },
    validationSchema: Yup.object({
      id: Yup.string().required("Vui lòng nhập id!"),
      name: Yup.string().required("Vui lòng nhập họ và tên!"),
      age: Yup.number()
        .min(1, "Không được nhỏ hơn 0!")
        .required("Vui lòng nhập tuổi!"),
    }),
    onSubmit: (values) => {
      // Xử lý logic khi submit form
      //navigate('/signin')
      //  // Lấy mảng từ localStorage (nếu có) hoặc tạo một mảng mới
      //  const users = JSON.parse(localStorage.getItem('users')) || [];

      // Thêm đối tượng mới vào mảng
      //users.push(values);

      //  // Lưu mảng đã cập nhật vào localStorage
      //  localStorage.setItem('users', JSON.stringify(users));
      handleAddUser(values);
      //const updatedUsers = [...users, values];
      console.log(values);
    },
  });

  return (
    

    <div className="container p-5">
       {/* {toast && <Toast ref={toast.toast} position="top-left" />} */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add
      </button>
      <AddStudient
        handleSubmit={formik.handleSubmit}
        valueId={formik.values.id}
        valueName={formik.values.name}
        valueAge={formik.values.age}
        onChange={formik.handleChange}
      />
      <div className=" row">
        <h1
          className="col-md-12 d-flex justify-content-center mb-3 mt-3"
          style={{ color: "red" }}
        >
          TABLE UI
        </h1>
        <CForm className="col-md-6 d-flex mx-auto m-5 ">
          <CFormInput
            type="search"
            className="me-2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CButton
            type="submit"
            color="success"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              handleSearch(searchQuery);
            }}
          >
          <i class="fa-solid fa-magnifying-glass"></i>
          </CButton>
        </CForm>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {(filteredUserList.length > 0 ? 
          filteredUserList
         : userList).map((u) => (
              <tr key={u.id}>
                <th scope="row">{u.id}</th>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      onClick={() => {
                        setSelected(u);
                        setId(u.id);
                        setName(u.name);
                        setAge(u.age);
                      }}
                    >
                      Edit
                    </button>

                    <EditStudient
                      handleSubmit={handleUpdate}
                      valueId={id}
                      valueAge={age}
                      valueName={name}
                      setId={setId}
                      setName={setName}
                      setAge={setAge}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteUser(u.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLists;
