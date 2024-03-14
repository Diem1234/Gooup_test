import { CButton, CCol, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useState } from 'react'
import { students } from '../../component/data/students';
import Layout from '../layout/Layout';


const AddUser = () => {
    const [userList, setUserList] = useState(students);
    const [selectedUser, setSelectedUser] = useState(null);
    const [saveDisabled, setSaveDisabled] = useState(true);
    const [studentList, setStudentList] = useState([]);

    const handleUserSelect = (event) => {
        const selectedValue = parseInt(event.target.value);
        const selectedUser = userList.find((user) => user.id === selectedValue);
        console.log(selectedUser)
        setSelectedUser(selectedUser);
        setSaveDisabled(false);
    };

    const handleSave = () => {
        if (selectedUser) {
            // Thêm đối tượng được chọn vào mảng studentList
      setStudentList((prevStudentList) => [...prevStudentList, selectedUser]);
      localStorage.setItem('selectedUser', JSON.stringify([...studentList, selectedUser]));

            // Gửi đối tượng được chọn đến cơ sở dữ liệu
            // Gửi yêu cầu AJAX hoặc sử dụng thư viện quản lý trạng thái như Redux để gửi dữ liệu đến backend
      
            // Hiển thị thông báo sau khi lưu thành công
            alert('Đã lưu thành công!');
          }
      
          setSelectedUser(null);
          setSaveDisabled(true);
    };

  return (
    <div className="mt-5 container">
      <h1 className="text-center">Bài 38</h1>
      <div className="d-flex justify-content-center mt-2  p-5">
        <CRow className="g-3 shadow p-3 rounded">
          <CCol sm={12}>
            <CFormSelect
              aria-label="Default select example"
              onChange={handleUserSelect}
            >
              <option>Vui lòng chọn một sinh viên</option>
              {userList &&
                userList.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
            </CFormSelect>
          </CCol>
          <CCol sm>
            <CButton type="submit" disabled={saveDisabled} onClick={handleSave}>
              Save
            </CButton>
          </CCol>
        </CRow>
      </div>
      <div className="mx-auto " style={{width : "75%"}}>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">Address</CTableHeaderCell>
              <CTableHeaderCell scope="col">Age</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {studentList &&
              studentList.map((u) => (
                <CTableRow key={u.id}>
                  <CTableHeaderCell scope="row">{u.name}</CTableHeaderCell>
                  <CTableDataCell>{u.email}</CTableDataCell>
                  <CTableDataCell>{u.address}</CTableDataCell>
                  <CTableDataCell>{u.age}</CTableDataCell>
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
      </div>
    </div>
  );
}

export default AddUser