import React, { createContext, useRef, useState } from 'react';
import { showToast } from '../utils/utils';
import { Toast } from 'primereact/toast';
import useToast from '../component/useHooks/useToast';

// Tạo UserContext
export const UserContext = createContext();

// Tạo Provider cho UserContext
export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const toast = useToast()

  const handleUpdateUser = (id, name, age) => {
    // Logic cập nhật người dùng
    const updatedUserList = userList.map((u) => {
      if (u.id === id) {
        return {
          ...u,
          name,
          age,
        };
      }
      return u;
    });

    setUserList(updatedUserList);
    // Cập nhật localStorage và hiển thị thông báo thành công
    localStorage.setItem("users", JSON.stringify(updatedUserList));
   
    toast.showSuccess('Cập nhật thông tin thành công!');

  };

  const handleDelete = (userId) => {
    // Hiển thị cảnh báo trước khi xóa
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
      // Xóa người dùng khỏi danh sách
      const updatedUsers = userList.filter((u) => u.id !== userId);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Cập nhật danh sách người dùng
      setUserList(updatedUsers);
      toast.showSuccess("Xóa thành công!");
    }else{
      toast.showError("Hủy thao tác!");
    }
  };

  const handleAddUser = (values) => {
    const updatedUsers = [...userList, { ...values }];
    setUserList(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.showSuccess('Thêm thàn công')
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        handleUpdateUser,
        handleDelete,
        handleAddUser,
        setUserList,
        toast
      }}
    >
      
      <Toast ref={toast.toast} />
      {children}
    </UserContext.Provider>
  );
};