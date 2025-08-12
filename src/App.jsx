import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboards from "./pages/Dashboards";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate to="/login" replace />} />

      
        <Route path="/login" element={<Login />} />

        
        <Route
          path="/dashboards"
          element={
            <ProtectedRoute>
              <Dashboards />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
