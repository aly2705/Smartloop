import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import DevPage from "./pages/dev/DevPage";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import PrivateServicesPage from "./pages/privateServ/PrivateServicesPage";
import PublicServicesPage from "./pages/publicServ/PublicServicesPage";
import ServicesPage from "./pages/services/ServicesPage";
import { useAuth } from "./context/auth-context";
import logo from "./assets/logo-2.png";
import PrivateListPage from "./pages/privateListPage/privateListPage";
import SignUpFormPage from "./pages/signUpForm/SignUpFormPage";

function App() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="" />
        {isLoggedIn && (
          <button onClick={logout} className="btn">
            Logout
          </button>
        )}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dev" element={<DevPage />} />
          {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/public-services" element={<PublicServicesPage />} />
          <Route path="/private-services" element={<PrivateServicesPage />} />
          <Route path="/private-list" element={<PrivateListPage />} />
          <Route path="/signup-page" element={<SignUpFormPage />} />

          <Route
            path="/*"
            element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
