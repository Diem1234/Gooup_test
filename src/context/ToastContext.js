import React, { createContext, useRef, useState } from 'react';
import { showToast } from '../utils/utils';
import { Toast } from 'primereact/toast';
import useToast from '../component/useHooks/useToast';

// Tạo UserContext
export const ToastContext = createContext();

// Tạo Provider cho ToastContext
export const ToastProvider = ({ children }) => {

  const toast = useToast()//sử dụng usehook mới tạo

  const handleSuccess= () => {
    // Gọi hàm hiển thị của hooks
    toast.showSuccess('Sự kiện thành công!');
  };

  const handleInfo = () => {
    // Gọi hàm hiển thị của hooks
    toast.showInfo('Sự kiện thành công!');
  };

  const handleWarm= () => {
    // Gọi hàm hiển thị của hooks
    toast.showWarn('Sự kiện thành công!');
  };
  const handleError= () => {
    // Gọi hàm hiển thị của hooks
    toast.showError('Sự kiện thành công!');
  };
  
  
  return (
    <ToastContext.Provider
      value={{
        handleSuccess,
        handleInfo,
        handleWarm,
        handleError,
        toast
      }}
    >
      
      <Toast ref={toast.toast} />
      {children}
    </ToastContext.Provider>
  );
};