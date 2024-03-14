
export const showToast = (toastRef, severity, summary, detail) => {
  if (toastRef.current) {
    toastRef.current.show({ severity, summary, detail, life: 3000 });
  }
};


