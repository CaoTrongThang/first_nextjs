// lib/auth.ts
import { NextResponse } from 'next/server';

type User = {
  username: string;
  passwordHash: string;
  token: string;
};

export const users: User[] = [];

export const generateToken = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const hashPassword = (password: string) => {
  // Simple hash function for demonstration
  return password + 'salt';
};

export const authenticate = (req: Request) => {
  const token = req.headers.get('cookie')?.split('; ').find(row => row.startsWith('token='));
  if (!token) return null;
  
  const user = users.find(u => u.token === token.split('=')[1]);
  return user;
};