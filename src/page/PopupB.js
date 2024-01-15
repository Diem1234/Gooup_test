import React, { useState } from 'react'
import { CButton, CFormInput, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'


const PopupB = ({onsubmit,visible,setVisible,title,upload,close,submit}) => {
    const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (selectedImage) {
      onsubmit(selectedImage);
    }
  };
  return (
    <div><CModal
    alignment="center"
    visible={visible}
    onClose={() => setVisible(false)}
    aria-labelledby="VerticallyCenteredExample"
  >
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample">{title}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CInputGroup className="mb-3">
        <CFormInput type="file" id="inputGroupFile02" onChange={handleImageChange}/>
        <CInputGroupText component="label" htmlFor="inputGroupFile02">
          {upload}
        </CInputGroupText>
      </CInputGroup>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" onClick={() => setVisible(false)}>
        {close}
      </CButton>
      <CButton color="primary" onClick={handleSubmit}>{submit}</CButton>
    </CModalFooter>
  </CModal>
</div>
  )
}

export default PopupB