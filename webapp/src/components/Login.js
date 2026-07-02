import { useState } from 'react';
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {

    try {

      const response = await axios.post(
        'http://localhost:3000/login',
        {
          username,
          password
        }
      );

      alert(response.data.message);

    } catch {

      alert('Login failed');

    }

  };

  return (
    <div>
      <h2>User Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>
    </div>
  );

}

export default Login;
