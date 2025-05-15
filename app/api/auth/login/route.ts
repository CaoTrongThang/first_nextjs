import { NextResponse } from 'next/server';
import { users, generateToken, hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
  const user = users.find(u => u.username === username);
  
  if (!user || user.passwordHash !== hashPassword(password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  
  const token = generateToken();
  user.token = token;
  
  const response = NextResponse.json({ message: 'Login successful' });
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 5
  });
  
  return response;
}