import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import Leads from './components/Leads';
import ServiceRequests from './components/ServiceRequests';
import Users from './components/Users';
import Dashboard from './components/Dashboard';
 export const url = 'https://crm-be-pmg3.onrender.com';


function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/leads' element={<Leads/>}/>
    <Route path='/serviceRequests' element={<ServiceRequests/>}/>
    <Route path='*' element={<Navigate to= '/login'/>}/>
  </Routes>
  </BrowserRouter>
  </>
    
  
}

export default App;
