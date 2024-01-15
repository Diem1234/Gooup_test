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
function App({ Component }) {
  const value = {
  
   
    };
  return (
    <AuthContextProvider>
    <Provider store={store}>
    <CounterProvider><PrimeReactProvider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route  path="/dashboard" element={<Dashboardtow />} />
            <Route path="/profile" element={<Profile/>}/>
            
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/images" element={<Images/>}/>
          <Route path="/home" element={<Dashboard/>}/>
          <Route path="/popup" element={<OpenPopup/>}/>     
          <Route path="/demoprimerreact" element={<PrimerReact/>}/>
          <Route path="/demomaterialui" element={<Coreui/>}/>
          <Route path="/demobootstrap" element={<Profile/>}/>
          <Route  path="/signin" element={<Login />} />
          <Route  path="/signup" element={<SignUp />} />
          <Route  path="/userlist" element={<UserList />} />
          <Route  path="/user-edit/:id" element={<UrerListId />} />
          <Route  path="/uploadfile" element={<UploadFile />} />
          <Route  path="/counter" element={<Counter />} />
          <Route  path="/counters" element={<Parent />} />
        </Routes>
      </BrowserRouter>
 </PrimeReactProvider>
    </CounterProvider>
    </Provider></AuthContextProvider>




  );
}

export default App;
