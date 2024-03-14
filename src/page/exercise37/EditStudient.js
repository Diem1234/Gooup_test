import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
const EditStudient = ({handleSubmit,valueId,valueName,valueAge,setId,setName,setAge,resetModal}) => {

    const navigate = useNavigate();
  
  return (
    <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
    <div className="modal-dialog">
        <form className="" onSubmit={handleSubmit}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
          
          <div className="mb-3">
            <input
              type="text"
              name="id"
              className="form-control"
              id="exampleInputId1"
              placeholder="id"
              value={valueId} onChange={(e)=>setId(e.target.value)}
            />
            {/* <span style={{ color: 'red' }}>{errorEmail}</span> */}
            {/* {formik.touched.id && formik.errors.id && <span style={{ color: 'red' }}>{formik.errors.id}</span>} */}
          </div> 
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName1"
              placeholder="Name"
              value={valueName} onChange={(e)=>setName(e.target.value)}
              />
            {/* <span style={{ color: 'red' }}>{errorEmail}</span> */}
            {/* {formik.touched.name && formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>} */}
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="age"
              className="form-control"
              id="exampleInputAge1"
              placeholder="Age"
              value={valueAge}
              onChange={(e)=>setAge(e.target.value)}
            />
           
             {/* {formik.touched.age && formik.errors.age && <span style={{ color: 'red' }}>{formik.errors.age}</span>} */}
          </div>
       
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >
              Save changes
            </button>
          </div>
        </div></form>
      </div> 
    </div>
  );
}

export default EditStudient