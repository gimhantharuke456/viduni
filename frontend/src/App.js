import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./modules/Admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
