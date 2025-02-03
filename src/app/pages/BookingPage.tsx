import React from 'react';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const BookingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Faça sua Reserva</h2>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
