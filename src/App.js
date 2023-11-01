
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import UserList from './page/UserList';
import UrerListId from './page/UrerListId';
import UploadFile from './component/UploadFile';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/user-edit/:id" element ={<UrerListId />} />
        <Route path="/uploadfile" element={<UploadFile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
