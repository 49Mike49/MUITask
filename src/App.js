import './App.css';
import HomePage from './components/Home.js/Index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/ThemeProvider';

function App() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    );
}

export default App;
