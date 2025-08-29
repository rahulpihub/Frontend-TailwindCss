import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Logos */}
      <div className="flex gap-6 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-20 w-20 hover:drop-shadow-[0_0_10px_#646cffaa] transition-transform hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-20 w-20 hover:drop-shadow-[0_0_10px_#61dafbaa] transition-transform hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Counter Card */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code className="bg-gray-700 px-2 py-1 rounded">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
