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
    <section class="flex justify-center p-8 registerbody loginform">
        <div class=" mb-14 p-6 space-y-4 md:space-y-6 sm:p-8 loginsize bg-white tab">
            <h1
                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Login
            </h1>
            <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input name="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleInputChange} value={formData.email} type="email"
                        placeholder="Enter your email address" />
                </div>
                <div>
                    <label for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input name="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleInputChange} value={formData.password} type="password"
                        placeholder="Enter your password" />
                </div>
                <button type="submit"
                    class="w-full text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account? <a href="#"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register Now</a>
                </p>
            </form>
        </div>
    </section>
  )
}

export default Login;