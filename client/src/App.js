import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './components/erorrs/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
