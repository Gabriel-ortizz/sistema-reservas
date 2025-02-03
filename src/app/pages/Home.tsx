import React from 'react';
import Header from '../components/Header';
import RoomList from '../components/RoomList';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Escolha seu quarto</h2>
        <RoomList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
