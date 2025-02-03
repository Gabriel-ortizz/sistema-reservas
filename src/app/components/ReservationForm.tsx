import React, { useState } from 'react';

const ReservationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const reservation = { name, phone, people, date };
    
    // Enviar os dados para o backend (simulação com um alert)
    alert(`Reserva feita com sucesso: ${JSON.stringify(reservation)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-semibold">Telefone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="people" className="block text-sm font-semibold">Número de Pessoas</label>
        <input
          type="number"
          id="people"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="border p-2 rounded-md w-full"
          required
          min={1}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-semibold">Data</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded-md w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Reservar
      </button>
    </form>
  );
};

export default ReservationForm;
