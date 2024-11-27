import './App.css';
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='w-screen min-h-screen flex flex-col font-inter bg-richblack-900'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
