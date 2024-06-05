import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUsers = [...users, data]
        setUsers(newUsers);

        form.reset();
      })
  }

  return (
    <>
      <h2>Users Management System</h2>
      <h3>Numbers of Users: {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type='text' name='name' id=''></input>
        <br />

        <input type='email' name='email' id=''></input>
        <br />

        <input type='submit' value='Add User'></input>
        <br />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id}, name: {user.name}, email: {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
