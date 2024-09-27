import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./modules/Admin/AdminDashboard";
import Home from "./common/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />{" "}
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
