import React from 'react';
import RoomCard from './RoomCard';

const rooms = [
  { id: 1, type: 'Quarto Standard', price: 200, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, type: 'Quarto Luxo', price: 350, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, type: 'Suíte Presidencial', price: 500, imageUrl: 'https://via.placeholder.com/300' },
];

const RoomList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {rooms.map(room => (
        <RoomCard key={room.id} roomType={room.type} price={room.price} imageUrl={room.imageUrl} />
      ))}
    </div>
  );
};

export default RoomList;
