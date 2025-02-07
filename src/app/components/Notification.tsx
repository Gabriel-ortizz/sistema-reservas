interface User {
  avatar: string;
  name: string;
}

interface UserAvatarProps {
  user: User;
}

export function UserAvatar({ user }: UserAvatarProps) {
  return <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />;
}

interface NotificationProps {
  message: string;
}

export function Notification({ message }: NotificationProps) {
  return <div className="bg-yellow-300 p-2 rounded">{message}</div>;
}
