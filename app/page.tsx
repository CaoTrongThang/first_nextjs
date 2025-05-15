"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


function Register( {onRegister}: {onRegister: (name: string, email: string, password: string) => void} ) {
  // How do i increase the size of the bg image
  return (
    <div className="flex bg-white justify-center items-center w-[30%] h-[100%]">
      <div className="flex bg-cover bg-center flex-col gap-4 items-center ">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Register</h1>
        <input type="text" placeholder="Name" className="w-[250px] h-[40px] rounded-lg transition-all duration-700 ease-out hover:translate-y-1"  />  
        <input type="email" placeholder="Email" className="w-[250px] h-[40px] rounded-lg transition-all duration-700 ease-out hover:translate-y-1"/>
        <input type="password" placeholder="Password" className="w-[250px] h-[40px] rounded-lg transition-all duration-700 ease-out hover:translate-y-1"/>
        <button className="text-white bg-gradient-to-r from-orange-400 to-yellow-500 w-[150px] h-[40px] rounded-lg transition-all duration-700 ease-out hover:translate-y-1"
          onClick={() => onRegister('name', 'email', 'password')}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  // Animation state for fade-in
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const handleRegister = async (name: string, email: string, password: string) => {
    console.log(name, email, password);

    const response = await fetch('/api/post/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex bg-white w-full h-screen">
      <div
        className={`w-[90%] h-[100%] justify-center items-center flex flex-row bg-gray-50 rounded-xl shadow-lg p-[20px] transition-all duration-700 ease-out
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <img src="/blank_note.png" alt="blank_note" className="rounded-lg pr-10  h-[500px] object-contain" />
        <div>
          <div className="">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Note Everything You Want</h1>
            <p className="text-lg text-gray-600 max-w-md">did i forget something?</p>

            <button
              onClick={() => router.push('/note')}
              className="mt-10 bg-gradient-to-r from-orange-400 to-yellow-500 w-[250px] h-[50px] rounded-lg transition-all duration-700 ease-out hover:translate-y-1"
            >
              <p className="text-white max-w-md text-2xl">Note Now</p>
            </button>
          </div>
        </div>
      </div>
      
      <Register onRegister={handleRegister}/>
    </div>
  );
}
