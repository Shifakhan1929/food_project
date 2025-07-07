// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import MenuList from "./components/MenuList";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow-md p-4">
//         <h1 className="text-3xl font-bold text-center text-orange-600">🍽️ EasyDev Resto</h1>
//       </header>
//       <section>
//         <MenuList />
//       </section>
//     </div>
//   );
// }

// export default App;
import MenuList from "./components/MenuList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold text-center text-orange-600">🍽️ EasyDev Resto</h1>
        <p className="text-center text-gray-500 mt-2">Welcome to our tasty world!</p>
      </header>
      <main className="p-4">
        <MenuList />
      </main>
    </div>
  );
}

export default App;


