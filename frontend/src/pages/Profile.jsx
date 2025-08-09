import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await api.get('/auth/profile');
        if (mounted) setUser(data.user);
      } catch (err) {
        const msg = err.response?.data?.error || 'Failed to load profile';
        setError(msg);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (error) return <div className="text-red-600">{error}</div>;
  if (!user) return <div className="text-gray-500">Loading...</div>;

  return (
    <div className="bg-white rounded shadow p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="space-y-2">
        <div><span className="font-medium">Name:</span> {user.name}</div>
        <div><span className="font-medium">Email:</span> {user.email}</div>
        <div className="text-sm text-gray-500">User ID: {user._id}</div>
      </div>
    </div>
  );
}

