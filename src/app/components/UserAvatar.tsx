interface User {
  name: string;
  avatar: string;
}

interface UserAvatarProps {
  user: User;
}

export function UserAvatar({ user }: UserAvatarProps) {
  return (
    <div className="flex items-center">
      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
      <span className="ml-2 text-gray-700">{user.name}</span>
    </div>
  );
}
