import * as React from 'react';
import './App.css';
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        {/* <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> */}
        <Container maxWidth="sm" sx={{ height: '100vh' }}>
          <Home />
        </Container>
      </React.Fragment>
      
    </div>
  );
}
