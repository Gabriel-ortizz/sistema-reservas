import React, { useState } from 'react';

const LanguageCurrencySelector: React.FC = () => {
  const [language, setLanguage] = useState('Português');
  const [currency, setCurrency] = useState('BRL');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="p-2 border rounded"
      >
        <option value="Português">Português</option>
        <option value="English">English</option>
        <option value="Español">Español</option>
      </select>

      <select
        value={currency}
        onChange={handleCurrencyChange}
        className="p-2 border rounded"
      >
        <option value="BRL">BRL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default LanguageCurrencySelector;
