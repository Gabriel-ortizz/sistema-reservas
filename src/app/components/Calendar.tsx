import React, { useState } from 'react';
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Escolha uma Data</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        dateFormat="dd/MM/yyyy"
        className="border p-2 rounded-md"
      />
      {selectedDate && (
        <p className="mt-4">Você selecionou: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default Calendar;
