import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/reservations" className="hover:text-gray-400">Reservar</Link></li>
        <li><Link to="/admin" className="hover:text-gray-400">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
