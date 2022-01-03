import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../src/components/ui/Theme'
import Header from '../src/components/ui/Header'
import { Routes, BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/stats" element={<div>Stats</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/account" element={<div>Account</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
