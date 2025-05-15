import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  const data = await request.json(); 

  const response = NextResponse.json({ message: 'Received!', yourData: data });
  response.cookies.set('isRegistered', 'true', {
    httpOnly: true,
    maxAge: 60 * 60,
  });
  return response;
}