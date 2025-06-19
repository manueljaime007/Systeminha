import { Routes, Route } from "react-router-dom";
import { HomePage } from "../resources/views/pages/HomePage";
import { DevsPage } from "../resources/views/pages/DevsPage";
import { AboutPage } from "../resources/views/pages/AboutPage";
import { Dashboard } from "../resources/views/pages/user/Dashboard";
import { PrivateRoute } from "../routes/PrivateRoute";
import { RegisterPage } from "../resources/views/pages/auth/RegisterPage";
import { LoginPage } from "../resources/views/pages/auth/LoginPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/devs" element={<DevsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
