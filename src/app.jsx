import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import NavigationBar from "./components/navigationBar";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? <NavigationBar /> : <div></div>}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/login/signup" exact element={<Signup />}></Route>
          <Route path="/homepage" exact element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
