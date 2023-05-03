import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [count, setCount] = useState(0);

  return (
    <main className='flex justify-center h-screen items-center flex-col'>
      <h1 className='text-4xl'>{count}</h1>
      <div className='gap-4 w-40 flex justify-evenly'>
        <button className='text-2xl' onClick={() => setCount(count + 1)}>+</button>
        <button className='text-2xl' onClick={() => setCount(0)}>Reset</button>
        <button className='text-2xl' onClick={() => setCount(count - 1)}>-</button>
      </div>
    </main>
  )
}
