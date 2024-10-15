import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import routesConfig from './routesConfig';

function App() {
  return (
    <Router>
      <div className='Main'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App
