import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from '../src/components/ui/Theme'
import Header from '../src/components/ui/Header'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
  );
}

export default App;
