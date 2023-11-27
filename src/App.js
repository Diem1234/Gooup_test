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

function App() {
  return (
    <Provider store={store}>
    <CounterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/user-edit/:id" element={<UrerListId />} />
          <Route path="/uploadfile" element={<UploadFile />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counters" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </CounterProvider>
    </Provider>
  );
}

export default App;
