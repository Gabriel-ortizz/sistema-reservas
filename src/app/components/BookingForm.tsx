'use client'
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reserva feita por ${name} (${email}) de ${checkIn} a ${checkOut}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">Check-in</label>
        <input
          type="date"
          id="check-in"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="mt-2 w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">Check-out</label>
        <input
          type="date"
          id="check-out"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="mt-2 w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Confirmar Reserva</button>
    </form>
  );
};

export default BookingForm;
