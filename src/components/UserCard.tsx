import React from 'react';
import { Twitter } from 'lucide-react';
import type { TwitterUser } from '../data/users';

interface UserCardProps {
  user: TwitterUser;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">{user.name}</h3>
              <a
                href={`https://twitter.com/${user.handle.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 flex items-center space-x-1"
              >
                <span>{user.handle}</span>
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <span className="text-gray-500 text-sm">{user.followers} followers</span>
          </div>
          <p className="mt-2 text-gray-600">{user.bio}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {user.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}