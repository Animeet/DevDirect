import logo from "../images/logo.png";
import { Navigate, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Header({ user }) {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  function navHandler(sectionName) {
    console.log(sectionName);
    window.location.href = `/#${sectionName}`;
    return <Navigate replace to={`/#${sectionName}`} />;
  }

  function logOutHandler() {
    console.log("log out");
    axios.get("/auth/logout").then((res) => {
      navigate("/");

      window.location.reload();
    });
  }

  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl" id="nav-div">
          <a id='logo' href="/" class="flex items-center">
            <img src={logo} class="mr-3 h-14" alt="devDirect Logo" />
          </a>
          <div class="flex justify-end items-center lg:order-2" id="btn-div">
            <a
              id="loginBtn"
              href="/login"
              class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              {user ? "Profile" : "Log in"}
            </a>
            {user ? (
              <a
                onClick={logOutHandler}
                href="#"
                class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log Out
              </a>
            ) : (
              <a
                href="/register"
                class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" id="get-started"
              >
                Get started
              </a>
            )}
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Home
                </a>
              </li>
              <li
                onClick={() => {
                  navHandler("students");
                }}
              >
                <a
                  href="#students"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Students
                </a>
              </li>
              <li
                onClick={() => {
                  navHandler("employers");
                }}
              >
                <a
                  href="#employers"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Employers
                </a>
              </li>
              <li
                onClick={() => {
                  navHandler("practice");
                }}
              >
                <a
                  href="#practice"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Practice
                </a>
              </li>
              <li
                onClick={() => {
                  navHandler("contact");
                }}
              >
                <a
                  href="#contact"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Contact
                </a>
              </li>
              <li
                onClick={() => {
                  navHandler("prospect");
                }}
              >
                <a
                id="prospectBtn"
                  href="/prospect"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Prospects
                </a>
              </li>
            </ul>
          </div>
          <section className="MOBILE-MENU flex lg:hidden" id="burger-menu">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/">Home</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/prospect">Prospects</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
}

export default Header;
