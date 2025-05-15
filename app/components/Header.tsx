"use client"

import Image from 'next/image';

interface HeaderProps {
  user: {
    name: string;
    avatar?: string;
  }
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        {user.avatar && (
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <span className="font-medium">{user.name}</span>
      </div>
    </header>
  );
}