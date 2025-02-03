'use client'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import ReservationForm from './components/ReservationForm';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar fixa no topo */}
        <Navbar />
        <main className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/reservations" element={<ReservationForm />} />
          </Routes>
        </main>
        {/* Footer opcional */}
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2025 Loja da Namorada. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
