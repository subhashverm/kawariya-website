import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import SOS from "../pages/SOS"
import MainLayout from "../layout/MainLayout"
import Login from"../pages/Login"
import RouteMap from "../pages/RouteMap"
import Splash from "../pages/splash"
import Darshan from "../pages/Darshan";
import AdminLogin from "../admin/AdminLogin"
import AdminAnalytics from "../admin/AdminAnalytics";
import FacilityManagement from "../admin/FacilityManagement";
import SOSMonitoring from "../admin/SOSMonitoring";
import RestFacilities from "../pages/RestFacilities";
import MedicalHelp from "../pages/medicalFacilities";
export default function AppRoutes() {
  return (
    <BrowserRouter>
     <MainLayout>
      <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/darshan" element={<Darshan />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/map" element={<RouteMap />} />
          <Route path="/rest" element={<RestFacilities />} />
          <Route path="/medical" element={<MedicalHelp />}/>
         <Route path="/admin/sos" element={<SOSMonitoring />} />
        <Route path="/admin/facilities" element={<FacilityManagement />} />
      <Route path="/admin/login" element={<AdminLogin />} />
     <Route path="/admin/analytics" element={<AdminAnalytics />} />
      </Routes>
     </MainLayout>
      
    </BrowserRouter>
  )
}
