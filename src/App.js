import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path ='/' element={<Home/>}/>
        <Route path ='/search' element={<Search/>}/>
        <Route path ='/delete' element={<Delete/>}/>
        <Route path ='/viewall' element={<ViewAll/>}/>
      
      </Routes>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
