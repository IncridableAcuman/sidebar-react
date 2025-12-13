import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </BrowserRouter>
)
