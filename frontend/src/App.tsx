import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestPage from "./pages/test"; // Adjust path if needed

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-blue-500 text-white p-4 flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/test" className="hover:underline">
            Test Page
          </Link>
        </nav>

        {/* Routes */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1 className="text-2xl text-black font-bold">
        Welcome to React + Django App
      </h1>
      <p className="mt-2">Use the navigation above to go to Test Page.</p>
    </div>
  );
}
