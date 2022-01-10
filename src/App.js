import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/components/ui/Theme";
import Header from "../src/components/ui/Header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ResetPassword from "./components/pages/ResetPassword";
import {onAuthStateChange} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {UserContext} from './components/context/UserContext'
import {auth} from './firebase'
import Loader from "./components/ui/Loader";

function App() {

  const [user, setUser] = useState( {loggedIn: false, user: null} );
  const [authUser, loading] = useAuthState(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userr) => { // detaching the listener
        if (userr) {
          setUser({loggedIn: true, user: userr}) 
        } else {
          setUser({loggedIn: false, user: null}) 
        }
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting. 
}, []);

  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <UserContext.Provider value={user}>
        <>
        <Header />
        {!loading && 
          (<Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="/stats" element={<div>Stats</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/tracker" element={<div>Tracker</div>} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/account" element={<div>Account</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
          </Routes>)}
          {loading && <Loader/>}
          
          </>
        </UserContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
