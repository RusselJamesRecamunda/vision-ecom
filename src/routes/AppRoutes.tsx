import { useState } from "react"; 
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import { AuthenticationTitle } from "../components/Authentication/AuthenticationTitle";

// Admin
import { AdminSidebar } from "../components/vision-admin/AdminSidebar";
import { DashboardPage } from "../components/vision-admin/DashboardPage";
import { EventsPage } from "../components/vision-admin/EventsPage";
import { PostJobPage } from "../components/vision-admin/PostJobPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthenticationTitle />} />

        {/* Admin routes wrapped in sidebar */}
        <Route
          path="/admin/*"
          element={<AdminRoutesWrapper />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper component to handle sidebar + nested routes
function AdminRoutesWrapper() {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    setActive(page);
    navigate(`/admin/${page === "dashboard" ? "dashboard" : page}`);
  };

  return (
    <AdminSidebar active={active} setActive={handleNavigate}>
      <Routes>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="postjob" element={<PostJobPage />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </AdminSidebar>
  );
}

