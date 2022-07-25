import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from './pages/homepage';
import CyclesPage from './pages/cyclespage';
import SportsPage from './pages/sportspage';
import ElectronicsPage from './pages/electronicspage';
import AboutPage from './pages/aboutpage';
import LoginPage from './pages/loginpage';
import LogoutPage from './pages/logoutpage';
import { AuthContextProvider } from './context/AuthContext';

function App() {

  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage></LoginPage>} />
            <Route path="/homepage" element={<HomePage></HomePage>} />
            <Route path="/cyclespage" element={<CyclesPage></CyclesPage>} />
            <Route path="/sportspage" element={<SportsPage></SportsPage>} />
            <Route path="/electronicspage" element={<ElectronicsPage></ElectronicsPage>} />
            <Route path="/aboutpage" element={<AboutPage></AboutPage>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;