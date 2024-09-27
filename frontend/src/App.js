import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./modules/Admin/AdminDashboard";
import Home from "./common/Home/Home";
import AdminLogin from "./modules/Admin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />{" "}
        <Route path="/*" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
