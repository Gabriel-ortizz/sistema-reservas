import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import ReservationForm from './components/ReservationForm';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/reservations" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
