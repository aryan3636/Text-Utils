import { useState } from 'react';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About'; // Optional route
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [themeColor, setThemeColor] = useState('#020e39');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const applyDarkMode = (color) => {
    setMode('dark');
    setThemeColor(color);
    document.body.style.backgroundColor = color;
    showAlert(`Dark mode enabled with color ${color}!`, 'success');
  };

  const applyLightMode = () => {
    setMode('light');
    setThemeColor('light');
    document.body.style.backgroundColor = 'white';
    showAlert(`Light mode enabled!`, 'success');
  };

  return (
    <>    
    <Router>
      
      <Navbar
        title="TextUtils"
        themeColor={themeColor}
        mode={mode}
        darkMode={applyDarkMode}
        lightMode={applyLightMode}
      />
      <Alert alert={alert} />
      <Routes>
          <Route
            path="/about"
            element ={
              <About 
                mode={mode}
                themeColor={themeColor}
              />
            }
          />
          <Route
            path="/"
            element ={
              <TextForm
                showAlert={showAlert}
                themeColor={themeColor}
                heading="TextUtils - Word counter, character counter"
                mode={mode}
              />
            }
          />
      </Routes>
    </Router>
    </>
  );
}

export default App;
