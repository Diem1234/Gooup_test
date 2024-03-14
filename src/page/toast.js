
import React, { useContext, useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { showToast } from '../utils/utils';
import useToast from '../component/useHooks/useToast';
import { UserContext } from '../context/UserContext';
import { ToastContext } from '../context/ToastContext';

export default function SeverityDemo() {
    // const { showSuccess, showInfo, showWarn, showError, toast } = useToast();
    const {toast,handleSuccess,handleInfo,handleWarm,handleError} = useContext(ToastContext);


    return (
      <div className="card flex justify-content-center mt-5">
        <div className=" mx-auto " style={{width : 'auto'}}>
                {/* <Button label="Success" className="p-button-success" onClick={()=>showToast(toast, 'success', 'Success', 'Added successfully!')} />
                <Button label="Info" className="p-button-info" onClick={()=>showToast(toast, 'info', 'Info', 'Please note the following details.')} />
                <Button label="Warn" className="p-button-warning" onClick={()=>showToast(toast, 'warn', 'Warn', 'Proceed with caution!!')} />
                <Button label="Error" className="p-button-danger" onClick={()=>showToast(toast, 'error', 'Error', 'Failed to add data!')} />*/}
            
                <Button label="Success" className="p-button-success m-2" onClick={() => handleSuccess()} />
                <Button label="Info" className="p-button-info m-2" onClick={()=>handleInfo()} />
                <Button label="Warn" className="p-button-warning m-2" onClick={()=>handleWarm()} />
                <Button label="Error" className="p-button-danger m-2" onClick={()=>handleError()} />

                {/* <Toast ref={toast.toast} /> */}
        </div> 
      </div>
    );
}
        