import { CButton, CFormInput, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'
import PopupB from './PopupB';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Main from './layout/Main';

const OpenPopup = () => {
    const [visible, setVisible] = useState(false)
  
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
 
  const handleImageSubmit = (image) => {
    setSelectedImage(image);
    setVisible(false);
  };
  return (
    <Main title={'Page A'}>
      <div style={{ height: 'auto', width: '20%'}} className='mx-auto mt-3'>
      <select class="form-select" aria-label="Default select example" onChange={changeLanguage}>
        <option value="eng">{t("e")}</option>
        <option value="vie">{t("v")}</option>
      </select>
      </div>

      <h1 className='text-center'>{t("title_openpopup")}</h1>
      <CButton className='mx-auto d-flex justify-content-center mt-5' onClick={() => setVisible(!visible)}>
      {t("openpopup")}
      </CButton>
        <PopupB onsubmit={handleImageSubmit} visible={visible} setVisible={setVisible} title={t("title_popup")} upload={t("upload")} close={t("close")} submit={t("submit")}/>

      {selectedImage && <img className='d-flex mx-auto mt-3' height={'auto'} width={'500px'} src={selectedImage} alt="Selected" />}
    </Main>
  );
}

export default OpenPopup