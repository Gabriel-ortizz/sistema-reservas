import React from 'react';
import LanguageCurrencySelector from './LanguageCurrencySelector';
import LocationDateSelector from './LocationDateSelector';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white dark:bg-blue-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sistema de Reservas de Hotel</h1>
        <div className="flex space-x-6">
          <LocationDateSelector />
          <LanguageCurrencySelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
