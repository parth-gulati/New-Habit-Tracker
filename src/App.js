import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/components/ui/Theme";
import Header from "../src/components/ui/Header";
import {
  Routes,
  BrowserRouter,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ResetPassword from "./components/pages/ResetPassword";
import { createUserProfileDocument, onAuthStateChange } from "./firebase";
import "./fonts/fonts.css";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "./components/context/UserContext";
import { auth } from "./firebase";
import About from "./components/pages/About";
import Tracker from "./components/pages/Tracker/Tracker";
import Loader from "./components/ui/Loader";
import PrivateRoute from "./components/ui/PrivateRoute";
import NotFound from "./components/pages/NotFound";
import Profile from "./components/pages/Profile";
import NewHabit from "./components/pages/Tracker/NewHabit";

function App() {
  const [user, setUser] = useState({ loggedIn: true, user: null });
  const [authUser, loading] = useAuthState(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userr) => {
      // detaching the listener
      if (userr) {
        const userRef = await createUserProfileDocument(userr);

        userRef.onSnapshot((snapshot) => {
          setUser({ loggedIn: true, user: snapshot.data() });
        });
      } else {
        setUser({ loggedIn: false, user: null });
      }
    });
    return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting.
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <>
              <Header loading={loading} />
              {!loading && (
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ResetPassword />} />

                  {/* Private Routes */}
                  <Route path="/stats" element={<PrivateRoute />}>
                    <Route path="/stats" element={<div>Stats</div>} />
                  </Route>
                  <Route path="/about" element={<PrivateRoute />}>
                    <Route path="/about" element={<About />} />
                  </Route>
                  <Route path="/tracker" element={<PrivateRoute />}>
                    <Route path="/tracker" element={<Tracker />} />
                  </Route>
                  <Route path="/new-habit" element={<PrivateRoute />}>
                    <Route path="/new-habit" element={<NewHabit />} />
                  </Route>
                  <Route path="/account" element={<PrivateRoute />}>
                    <Route path="/account" element={<div>Account</div>} />
                  </Route>
                  <Route path="/profile" element={<PrivateRoute />}>
                    <Route path="/profile" element={<Profile />} />
                  </Route>
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              )}
              {loading && <Loader />}
            </>
          </LocalizationProvider>
        </UserContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
