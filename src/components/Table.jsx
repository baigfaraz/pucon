import React from 'react';
import EditOptions from './EditOptions';

const Table = () => {
  const users = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <h1 className="text-xl font-semibold">Users</h1>
        <p className="text-sm">A list of all the users in your account including their name, title, email, and role.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t bg-white">
                <td className="py-2 px-4 font-bold">{user.name}</td>
                <td className="py-2 px-4">{user.title}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <button className="text-purple-600 hover:underline"><EditOptions/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
