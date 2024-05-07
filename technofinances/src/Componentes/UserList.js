import React from 'react';
import { useUsers } from './UserProvider';

function UserList() {
  const { users } = useUsers();

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
