import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Signupinv from "./pages/Signupinv"
import Dashboard from "./pages/Dashboard"
import SProfile from "./pages/SProfile"
import Notifications from "./pages/Notifications"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupStartup" element={<Signup />} />
          <Route path="/signupInvestor" element={<Signupinv />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SProfile" element={<SProfile />} />
          <Route path="/Notifications" element={<Notifications />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
