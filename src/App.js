
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AppAuth from './Pages/Auth/AppAuth';
import HomePage from './Pages/Dashboard';
import SideBar from './Pages/SideBar'
import Layout from './Pages/Layout';
import DataTables from './Pages/DataTables/Ucic_Master';






function App() {
  return (
    <BrowserRouter>
    {/* <Layout/> */}
    <Routes>
    {/* <Route path="/" element={<AppAuth AppAuthentication={HomePage}/>}/> */}
    <Route path="/login" element={<AppAuth AppAuthentication={Login}/>}/>
    <Route path="/" element={<AppAuth AppAuthentication={Layout}/>}/>
    <Route path="/DataTables" element={<AppAuth AppAuthentication={DataTables}/>}/>
    {/* <Route path="/DataTables" element={<AppAuth AppAuthentication={DataTables}/>}/> */}
    {/* <Route path="/Sidebar" element={<AppAuth AppAuthentication={SideBar}/>}/> */}
    {/* <Route path="/*" element={<AppAuth AppAuthentication={Login}/>}/> */}
    

    </Routes>
    </BrowserRouter>
  );
}

export default App;
