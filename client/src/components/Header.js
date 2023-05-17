import logo from '../images/logo.png';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Header({user}) {
    const navigate = useNavigate();

    function navHandler (sectionName) {
        console.log(sectionName)
        window.location.href = `/#${sectionName}`
        return (
            <Navigate replace to={`/#${sectionName}`} />
        )
    }

    function logOutHandler () {
        console.log('log out')
        axios.get('/auth/logout')
        .then(res => {
            navigate('/');

            window.location.reload();
        })
    }

    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" class="flex items-center">
                        <img src={logo} class="mr-3 h-14" alt="devDirect Logo" />
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href="/login" class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">{user ? "Dashboard" : "Log in"}</a>
                        {
                            user ? (
                                <a onClick={logOutHandler} href="#" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Log Out</a>
                            ) : (
                                <a href="/register" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Get started</a>
                            )
                        }
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Home</a>
                            </li>
                            <li onClick={() => {navHandler("students")}}>
                                <a href="#students" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Students</a>
                            </li>
                            <li  onClick={() => {navHandler("employers")}}>
                                <a href="#employers" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Employers</a>
                            </li>
                            <li  onClick={() => {navHandler("practice")}}>
                                <a href="#practice" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Practice</a>
                            </li>
                            <li  onClick={() => {navHandler("contact")}}>
                                <a href="#contact" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Contact</a>
                            </li>
                            <li  onClick={() => {navHandler("prospect")}}>
                                <a href="#prospect" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Prospect</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;