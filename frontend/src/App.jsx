import React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';

function RequireAuth({ children }) {
  const token = localStorage.getItem('token');
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow mb-6">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between">
          <Link to="/" className="font-semibold text-gray-800">Auth App</Link>
          <div className="flex gap-4">
            {!token && (
              <>
                <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                <Link to="/signup" className="text-blue-600 hover:underline">Signup</Link>
              </>
            )}
            {token && (
              <>
                <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
                <button
                  className="text-red-600"
                  onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Navigate to={token ? '/profile' : '/login'} replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="*" element={<div className="text-gray-600">Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

