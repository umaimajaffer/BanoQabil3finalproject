import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions'; // Assuming you have this action

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // For signup
  const [error, setError] = useState(''); // For showing error messages
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle user signup
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (username && email && password) {
      // Create a new user object
      const user = {
        username: username,
        email: email,
        password: password,
      };

      // Save user data in local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Log the user in and navigate to checkout
      dispatch(login(user)); // Pass user object to login action
      navigate('/checkout'); // Redirect to checkout page
    } else {
      setError('Please fill in all fields.');
    }
  };

  // Handle user login
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      // Successful login
      dispatch(login(savedUser)); // Pass user object to login action
      navigate('/checkout'); // Redirect to checkout page
    } else {
      // If no matching user is found or password is incorrect
      setError('Incorrect email or password.');
    }
  };

  // Inline styles
  const styles = {
    container: {
      width: '400px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      margin: '100px auto', // Center the form vertically
      fontFamily: '"Times New Roman", Times, serif',
    },
    h2: {
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center the input fields and button
    },
    label: {
      textAlign: 'left',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#555',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '14px',
      width: '90%', // Reduce width of input fields slightly
      maxWidth: '300px', // Maximum width for input fields
    },
    button: {
      padding: '10px',
      width: '30%', // Reduced width for the button
      maxWidth: '200px', // Maximum width for the button
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '10px 0',
      textAlign: 'center',
    },
    linkButton: {
      marginTop: '10px',
      color: '#007bff',
      textDecoration: 'none',
    },
    error: {
      color: 'red',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {error && <p style={styles.error}>{error}</p>} {/* Display error messages */}
      
      <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit} style={styles.form}>
        {!isLogin && (
          <div className="mb-3">
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              style={styles.input}
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" style={styles.label}>Email address</label>
          <input
            type="email"
            style={styles.input}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            style={styles.input}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button style={styles.linkButton} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default LoginForm;
