import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/shared/Layout";
import Patient from "./components/shared/Patient";
import Appointments from "./components/shared/Appointments";
import BillingPage from "./components/shared/BillingPage";
import SettingPage from "./components/SettingPage";
import SupportPage from "./components/SupportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="patient" element={<Patient />} />
          <Route path="appointment" element={<Appointments />} />
          <Route path="billing" element={<BillingPage />} />
        </Route>
        <Route path="/support" element={<SupportPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
