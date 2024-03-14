import React, { useEffect } from "react";
import { CButton, CFormInput, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const Coreui = () => {
    useEffect(() => {
        const alertTrigger = document.getElementById("liveAlertBtn");
        const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    
        const appendAlert = (message, type) => {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = `
            <div className="alert alert-${type} alert-dismissible" role="alert">
              <div>${message}</div>
             
            </div>
          `;
     // <button type="button" className="btn-close" data-coreui-dismiss="alert" aria-label="Close"></button>
          alertPlaceholder.appendChild(wrapper);
        };
    
        if (alertTrigger) {
          alertTrigger.addEventListener("click", () => {
            appendAlert("Nice, you triggered this alert message!", "success");
          });
        }
    
        return () => {
          if (alertTrigger) {
            alertTrigger.removeEventListener("click", () => {
              appendAlert("Nice, you triggered this alert message!", "success");
            });
          }
        };
      }, []);
  return (
    <div className="container">
        <h1 className="text-center">DEMO MATERIAL UI</h1>
      <form className="row g-3 border shadow m-5">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      
        <div className="col-12" id="liveAlertPlaceholder">
         </div>  
            <button type="submit" className="btn btn-danger" id="liveAlertBtn" aria-label="" data-cor>Signin</button>
        

        
      </form>
        <table className="table">
        <thead>
            <tr>
         
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
     
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
 
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
 
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
        </tbody>
        </table>

      </div>
  );
};

export default Coreui;
