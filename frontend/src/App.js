import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./modules/Admin/AdminDashboard";
import Home from "./common/Home/Home";
import AdminLogin from "./modules/Admin/AdminLogin";
import MaintanceHome from "./modules/Maintaince/Driver/MaintenanceHome";
import Services from "./modules/Maintaince/Admin/Services";
import AddServices from "./modules/Maintaince/Admin/AddServices";
import UpdateServicesD from "./modules/Maintaince/Admin/UpdateServices";
import AddRepairs from "./modules/Maintaince/Admin/AddRepairs";
import UpdateRepairs from "./modules/Maintaince/Admin/UpdateRepairs";

import RepairVeh from "./modules/Maintaince/Admin/RepairVeh";
import DriverRepairs from "./modules/Maintaince/Driver/DriverRepairs";
import DriverServices from "./modules/Maintaince/Driver/DriverServices";
import Breakdown from "./modules/Maintaince/Admin/Breakdown";
import DriverBreakdowns from "./modules/Maintaince/Driver/DriverBreakdowns";
import AddBreakdown from "./modules/Maintaince/Driver/AddBreakdowns";
import UpdateBreakdown from "./modules/Maintaince/Driver/UpdateBreakdowns";
import BreakdownNotification from "./modules/Maintaince/Admin/BreakdownNotification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />{" "}
        <Route path="/*" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/maintance" element={<MaintanceHome />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Repair" element={<RepairVeh />} />
        <Route path="/Breakdown" element={<Breakdown />} />
        <Route path="/addServices" element={<AddServices />} />
        <Route path="/Service/:id" element={<UpdateServicesD />} />
        <Route path="/addRepairs" element={<AddRepairs />} />
        <Route path="/Repair/:id" element={<UpdateRepairs />} />
        <Route path="/BreakdownDr" element={<DriverBreakdowns />} />
        <Route path="/RepairDr" element={<DriverRepairs />} />
        <Route path="/ServiceDr" element={<DriverServices />} />
        <Route path="/ServiceDr/:id" element={<UpdateServicesD />} />
        <Route path="/addBreakdown" element={<AddBreakdown />} />
        <Route path="/Breakdown/:id" element={<UpdateBreakdown />} />
        <Route
          path="/BreakdownNotification"
          element={<BreakdownNotification />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
