import { CButton, CCol, CFormInput, CFormSelect, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useState } from 'react'
import { students } from '../../component/data/students';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddUser = () => {
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [saveDisabled, setSaveDisabled] = useState(true);
    const [studentList, setStudentList] = useState([]);
    const [nextId, setNextId] = useState(0);

    const formik = useFormik({
        initialValues: {
          //id: nextId, // Thêm trường id với giá trị là id tiếp theo
          name: ''
        
        },
        validationSchema: Yup.object({
          name: Yup.string('Không được nhập số')
          .min(5, 'Họ và tên phải có ít nhất 5 ký tự')
          .required('Vui lòng nhập họ và tên!'),
        
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
          setSaveDisabled(true);
          const updatedUsers = [...userList, {id: nextId + 1, ...values}];
          setUserList(updatedUsers);
          setNextId(nextId + 1);
          localStorage.setItem('users', JSON.stringify(updatedUsers));
          alert("Dăng ký thành công!");
          //const updatedUsers = [...users, values];
          console.log(values);
        }
      });
  return (
    <div className='mt-5 container'>
        <h1 className='text-center'>Bài 42</h1>
    <div className='d-flex justify-content-center mt-2  p-5'>
      <CRow className="g-3 shadow p-3 rounded me-5" style={{width: '40%'}}>
        <CCol sm={12}>
            <CFormInput type="text" name="name" placeholder="Họ và Tên" aria-label="default input example" value={formik.values.name} onChange={formik.handleChange}/>
            {formik.touched.name && formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}    
        </CCol>
        <CCol sm>
            <CButton type="submit" disabled={formik.errors.name || formik.values.name.length < 5} onClick={formik.handleSubmit}>Save</CButton>
        </CCol>
      </CRow>
     <CTable style={{width: '50%'}} >
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {userList && userList.map((u)=>(
    <CTableRow key={u.id}>
      <CTableHeaderCell scope="row">{u.name}</CTableHeaderCell>
    </CTableRow>
   ))}
  </CTableBody>
</CTable>
      </div> 
      
    </div>
  );
}

export default AddUser