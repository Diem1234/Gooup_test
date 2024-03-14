import { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';

const useToast = () => {
    // Để viết một custom hook trong React,
    //  bạn cần tuân thủ một số quy tắc và sử dụng các hook có sẵn trong React (như useState, useEffect, useRef, và các hook khác) 
    // để tạo ra các tính năng tùy chỉnh.
    const toast = useRef(null);
  
    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Thành công', detail: message, life: 3000 });
    };
  
    const showInfo = (message) => {
        toast.current.show({ severity: 'info', summary: 'Thông tin', detail: message, life: 3000 });
    };
  
    const showWarn = (message) => {
        toast.current.show({ severity: 'warn', summary: 'Cảnh báo', detail: message, life: 3000 });
    };
  
    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: 'Lỗi', detail: message, life: 3000 });
    };
  
    return {
      showSuccess,
      showInfo,
      showWarn,
      showError,
      toast,
    };
  };
  
  export default useToast;