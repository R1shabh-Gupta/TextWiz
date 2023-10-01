import './App.css';
import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from './components/Navbar';
import WorkArea from './components/WorkArea';
import { auth } from './firebase';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    }
  });

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar onIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Router>
        <Routes>
          <Route path="/" element={<WorkArea />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
