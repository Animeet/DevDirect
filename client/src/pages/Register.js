// import { redirect } from 'react-router-dom'
// import { useState } from 'react';
// import axios from 'axios';

// import Header from '../components/Header';
// import Footer from '../components/Footer';

// function UserRegister(props) {

//     const [registerType, setRegisterType] = useState('student');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [studentFormData, setStudentFormData] = useState ({
//         email: "",
//         password: "",
//         first_name: "",
//         last_name: "",
//     })


//     const handleInputChange = (e) => {
//         const prop = e.target.name;
//         if (registerType === 'student') {
//             setStudentFormData({
//                 ...studentFormData,
//                 [prop]: e.target.value
//             })
//         }
//       };

//       const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//           const res = await axios.post('/auth/register', studentFormData);
          
//           props.setUser(res.data.user);
//           setErrorMessage('');
//         } catch (err) {
//           const message = err.response.data.error;
    
//           setErrorMessage(message);
//         }
//       }

//       return (
//     <form onSubmit={handleSubmit}>
//         <h1>Register</h1>

//         {errorMessage && <p className="error">{errorMessage}</p>}

//         <input
//         name="first_name"
//         onChange={handleInputChange}
//         value={studentFormData.first_name}
//         type="text"
//         placeholder="Enter your first name" />
//         <input
//         name="last_name"
//         onChange={handleInputChange}
//         value={studentFormData.last_name}
//         type="text"
//         placeholder="Enter your last name" />
//         <input
//         name="email"
//         onChange={handleInputChange}
//         value={studentFormData.email}
//         type="email"
//         placeholder="Enter your desired email address" />
//         <input
//         name="password"
//         onChange={handleInputChange}
//         value={studentFormData.password}
//         type="password"
//         placeholder="Enter your desired password" />
//         <button>Submit</button>
//     </form>
//   );
// }

// export default UserRegister;

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const url = `/auth/register?type=${registerType === 'student' ? 'student':'recruiter'}`
//     const res = await axios.post(url, registerType === 'student');
      
//     props.setUser(res.data.user);
//     setErrorMessage('');
//     redirect('/dashboard');
//   } catch (err) {
//     const message = err.response.data.error;

//     setErrorMessage(message);
//   }
// }

import { useState } from 'react';
import axios from 'axios';

function Register(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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
      const res = await axios.post('/auth/register', formData);

      props.setUser(res.data.user);
      setErrorMessage('');
    } catch (err) {
      const message = err.response.data.error;

      setErrorMessage(message);
    }
  }

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <h1>Register</h1>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <input
        name="first_name"
        onChange={handleInputChange}
        value={formData.first_name}
        type="text"
        placeholder="Enter your First Name" />
        <input
        name="last_name"
        onChange={handleInputChange}
        value={formData.last_name}
        type="text"
        placeholder="Enter your Last Name" />
      <input
        name="email"
        onChange={handleInputChange}
        value={formData.email}
        type="email"
        placeholder="Enter your desired email address" />
      <input
        name="password"
        onChange={handleInputChange}
        value={formData.password}
        type="password"
        placeholder="Enter your desired password" />
      <button>Submit</button>
    </form>
  )
}

export default Register;

