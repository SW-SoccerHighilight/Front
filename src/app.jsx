import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import NavigationBar from './components/navigationBar';
import Homepage from './pages/homepage';
import Login from './pages/login';

function App() {
  return (

    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />}></Route>
          <Route path='/homepage' exact element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
