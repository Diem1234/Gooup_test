import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import UserList from "./page/UserList";
import UrerListId from "./page/UrerListId";
import UploadFile from "./component/UploadFile";
import Counter from "./page/Counter";
import { CounterProvider } from "./context/CounterContext";
import Parent from "./page/Parent";
import { Provider } from "react-redux";
import store from "./component/store";
//import Dashboard from "./page/Dashboard";
import AuthContextProvider from "./AuthContext/AuthContext";
import Dashboardtow from "./page/Dashboardtow";
import Profile from "./page/Profile";
import Main from "./page/layout/Main";
import NotFound from "./page/NotFound";
import { PrimeReactProvider } from 'primereact/api';
import PrimerReact from "./component/PrimerReact";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import Coreui from "./component/Coreui";
import OpenPopup from "./page/OpenPopup";
import Dashboard from "./page/Dashboard";
import Images from "./page/Images";
import UserLists from './page/exercise37/UserLists';

import AddUser from './page/exercise38/AddUser';
import SeverityDemo from "./page/toast";
import { UserProvider } from "./context/UserContext";
import { ToastContext, ToastProvider } from "./context/ToastContext";

function App({ Component }) {
  const value = {
  
   
    };
  return (
    <AuthContextProvider>
    <Provider store={store}>
    <CounterProvider><UserProvider><ToastProvider>
      <PrimeReactProvider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route  path="/dashboard" element={<Dashboardtow />} />
            <Route path="/profile" element={<Profile/>}/>
            
            <Route path="/student" element={<UserLists/>}/>
            <Route path="/students" element={<AddUser/>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/toast" element={<SeverityDemo/>}/>
            
            <Route path="/demoprimerreact" element={<PrimerReact/>}/>
            <Route path="/demomaterialui" element={<Coreui/>}/>
            <Route path="/demobootstrap" element={<Profile/>}/> 
            <Route  path="/uploadfile" element={<UploadFile />} />
            <Route  path="/counter" element={<Counter />} />
            <Route  path="/counters" element={<Parent />} />
          </Route>
           <Route path="/images" element={<Images/>}/>
            <Route path="/home" element={<Dashboard/>}/>
            <Route path="/popup" element={<OpenPopup/>}/>    
          <Route  path="/signin" element={<Login />} />
          <Route  path="/signup" element={<SignUp />} />
          <Route  path="/userlist" element={<UserList />} />
          <Route  path="/user-edit/:id" element={<UrerListId />} />

        </Routes>

      </BrowserRouter>
 </PrimeReactProvider></ToastProvider></UserProvider>
    </CounterProvider>
    </Provider></AuthContextProvider>




  );
}

export default App;
