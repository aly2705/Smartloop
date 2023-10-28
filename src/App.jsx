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
import PublicListPage from "./pages/publicListPage/PublicListPage";
import Footer from "./components/Footer/Footer";
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
          {isLoggedIn && <Route path="/" element={<LandingPage />} />}
          {isLoggedIn && <Route path="/dev" element={<DevPage />} />}
          {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
          {isLoggedIn && <Route path="/services" element={<ServicesPage />} />}
          {isLoggedIn && (
            <Route path="/public-services" element={<PublicServicesPage />} />
          )}
          {isLoggedIn && (
            <Route path="/private-services" element={<PrivateServicesPage />} />
          )}
          {isLoggedIn && (
            <Route
              path="/private-list/:serviceId"
              element={<PrivateListPage />}
            />
          )}
          {isLoggedIn && (
            <Route path="/signup-page" element={<SignUpFormPage />} />
          )}
          {isLoggedIn && (
            <Route
              path="/public-list/:serviceId"
              element={<PublicListPage />}
            />
          )}
          <Route
            path="/*"
            element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>{" "}
    </div>
  );
}

export default App;
