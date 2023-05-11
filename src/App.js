import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Articles from './pages/Articles';
import StaffLogin from './pages/StaffLogin';
import GCaptainLogin from './pages/GcapLogin';
import AdminLogin from './pages/adminLogin';
import IncidentMap from './pages/IncidentMap';
import StaffDashboard from './pages/staffDashboard';
import ReportIncident from './pages/reportIncident';
import StaffProfile from './pages/staffUserProfile';
import GcapDashboard from './pages/GCapDashboard';
import IncidentPage from './pages/incident';
import IncidentDetail from './pages/incidentDetail';
import AdminDashboard from './pages/adminDashbaord';
import RegistrationForm from './pages/adminRegistration';
import AddArticle from './pages/addArticle';
import AddGarbageSpot from './pages/addGrabageSpot';



// import IncidentReport from './components/IncidentReport';
// import IncidentList from './components/IncidentList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/GCaptainLogin-login" element={<GCaptainLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/IncidentMap" element={<IncidentMap />} />
        <Route path="/Staffdashboard" element={<StaffDashboard />} />
        <Route path="/reportIncident" element={<ReportIncident />} />
        <Route path="/staffProfile" element={<StaffProfile />} />
        <Route path="/GCapDashboard" element={<GcapDashboard />} />
        <Route path="/IncidentPage" element={<IncidentPage />} />
        <Route path="/incidentDetail" element={<IncidentDetail />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/addArticle" element={<AddArticle />} />
        <Route path="/addArticle" element={<AddArticle />} />
        <Route path="/addGrabageSpot" element={<AddGarbageSpot />} />
        {/* <Route path="/report" element={<IncidentReport />} />
        <Route path="/list" element={<IncidentList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
