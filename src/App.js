import * as React from 'react';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Raleway, Arial',
    }
  });
  return (
    <div className="App">
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="sm" sx={{ height: '100vh' }}>
            <Home />
          </Container>
        </ThemeProvider>
      </React.Fragment>

    </div>
  );
}
