import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sistema de Reserva</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Calendário
            </Link>
          </li>
          <li>
            <Link to="/reservations" className="hover:underline">
              Reservas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
