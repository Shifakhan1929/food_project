import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MenuList from "./components/MenuList";

function App() {
  return (
    <div className="min-h-screen bg-pink-300">
      <header className="bg-pink-400 shadow p-6">
        <h1 className="text-3xl font-bold text-center text-pink-800">Sagar Gaire</h1>
        <p className="text-center text-gray-500 mt-2">Welcome to our tasty world!</p>
      </header>
      <main className="p-20">
        <MenuList />
      </main>
    </div>
  );
}

export default App;


