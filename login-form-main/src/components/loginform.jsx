import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'root' && password === 'root') {
      // Login successful
      alert('Login Successful');
    } else {
      // Login unsuccessful
      alert('Login Unsuccessful');
    }
  };

  // Check if both the username and password fields are filled
  const isLoginDisabled = !username || !password;

  return (
    <>
      <div className="container">
        <h2>Login</h2>
          <form>
            <div className='inputContainer'>
              <p>Username</p>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='inputContainer'>
              <p>Password</p>
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="bottomForm">
              <button
                onClick={handleLogin}
                className={`w-[100px] p-2 rounded text-white ${
                  isLoginDisabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-purple-500 hover:bg-purple-600'
                } text-sm`}
                disabled={isLoginDisabled}
              >
                Login
              </button>
            </div> 
          </form>
          <small className='copyright'>&copy;</small>
      </div>
    </>
  );
}

export default Login;