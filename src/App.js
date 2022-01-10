import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/components/ui/Theme";
import Header from "../src/components/ui/Header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ResetPassword from "./components/pages/ResetPassword";
import FirebaseProvider from "./firebase";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <FirebaseProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="/stats" element={<div>Stats</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/account" element={<div>Account</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
          </Routes>
        </FirebaseProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
