import { useState } from 'react';
import axios from 'axios';

function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const prop = e.target.name;

    setFormData({
      ...formData,
      [prop]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/login', formData);

      props.setUser(res.data.user);
      setErrorMessage('');
    } catch (err) {
      const message = err.response.data.error;

      setErrorMessage(message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <input
        name="email"
        onChange={handleInputChange}
        value={formData.email}
        type="email"
        placeholder="Enter your email address" />
      <input
        name="password"
        onChange={handleInputChange}
        value={formData.password}
        type="password"
        placeholder="Enter your password" />
      <button>Submit</button>
    </form>
  )
}

export default Login;
