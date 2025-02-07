import { UserAvatar } from './UserAvatar';

interface User {
  name: string;
  avatar: string;
}

export function Header() {
  const user: User = {
    name: "Usuário",
    avatar: "https://via.placeholder.com/40",
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Painel</h1>
      <UserAvatar user={user} />
    </header>
  );
}
