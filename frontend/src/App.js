// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
