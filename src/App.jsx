import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import routesConfig from './routesConfig';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header routes={routesConfig} />
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
