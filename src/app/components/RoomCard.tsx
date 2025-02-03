interface RoomCardProps {
  roomType: string;
  price: number;
  imageUrl: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ roomType, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={roomType} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl">{roomType}</h2>
        <p className="text-gray-700 text-base">Preço: R${price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Reservar</button>
      </div>
    </div>
  );
};

export default RoomCard;
