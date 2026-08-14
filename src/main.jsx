import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx';
import { BrowserRouter as Router } from 'react-router';
import { ProjectProvider } from './hooks/ProjectsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </Router>
  </StrictMode>,
)
