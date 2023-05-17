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

import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <>
      <section className="flex justify-center p-8 registerbody">
        <div>
          <div class=" mb-14 p-6 space-y-4 md:space-y-6 sm:p-8 formsize bg-white tab">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create A User Account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input name="email" onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.email} type="email"
                  placeholder="Enter your desired email address" />
              </div>
              <div>
                <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input name="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={handleInputChange} value={formData.first_name} type="text"
                  placeholder="Enter your First Name" />
              </div>
              <div>
                <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input name="last_name" onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.last_name} type="text"
                  placeholder="Enter your Last Name" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input name="password" onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.password} type="password"
                  placeholder="Enter your desired password" />
              </div>
              <button type="submit"
                class="w-full text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <a href="#" class="font-medium text-primary-600 hover:underline">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Register;

