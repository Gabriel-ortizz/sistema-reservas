'use client'
import React, { useState } from 'react';

const LocationDateSelector: React.FC = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  return (
    <div className="flex space-x-4 items-center">
      <input
        type="text"
        placeholder="Destino"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded"
      />

      <input
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
        className="p-2 border rounded"
      />

      <input
        type="number"
        min="1"
        value={numPeople}
        onChange={(e) => setNumPeople(Number(e.target.value))}
        className="p-2 border rounded"
        placeholder="Pessoas"
      />
    </div>
  );
};

export default LocationDateSelector;
