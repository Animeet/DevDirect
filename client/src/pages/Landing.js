import section1 from "../images/section1.png";
import section2 from "../images/section2.png";
import section3 from "../images/section3.png";
import technical from "../images/technical.png";
import behavioral from "../images/behavioral.png";
import { useEffect } from "react";
import React, { useState } from "react";

function Landing({ user }) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function scrollToSection(sectionName) {
    const id = sectionName.replace("#", "");
    console.log(id);
    document.getElementById(id).scrollIntoView();
  }

  useEffect(() => {
    const path = window.location.href;
    const pathArray = path.split("/");
    const pathName = pathArray[pathArray.length - 1];
    console.log(pathName);

    if (pathName.includes("#")) {
      setTimeout(() => {
        scrollToSection(pathName);
      }, 500);
    }
  }, []);

  return (
    <main>
      <div>
        <section className="flex flex-row justify-evenly bg-sky-100" id="about">
          <div className="flex flex-col section1size mr-12 content-center">
            <h1 className="text-5xl mb-10 font-bold text-center">
              Get Connected, Quicker
            </h1>
            <p className="mb-10 text-center">
              devDirect is the leading application designed to get students into
              the industry quicker by connecting them with employers. If anyone
              knows the hardships of finding a job in the tech industry, it's
              us. We've been there, and we want to help you get there too.
            </p>
            <p className="mb-2 text-center">
              {" "}
              For <span class="font-bold">students</span>, gain passive
              attention from potential employers!
            </p>
            <p className="mb-10 text-center">
              For <span class="font-bold">employers</span>, it's never been
              easier to find quality developing minds!
            </p>
            <a href="/register" class="flex justify-center content-center">
              <button class="relative inline-flex items-center justify-center p-0.5 w-4/5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                <span class="relative px-5 text-white py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                  Sign Up Today
                </span>
              </button>
            </a>
          </div>
          <div class="mt-10 mr-10" id="image1">
            <img src={section1} alt="devDirect" />
          </div>
        </section>

        <div class="wavybot1">
          <svg viewBox="0 0 500 60" preserveAspectRatio="xMinYMin meet">
            <path
              class="change-my-color"
              d="M0,30 C150,80 350,0 500,30 L500,00 L0,0 Z"
            ></path>
          </svg>
        </div>

        <section class="flex flex-row justify-evenly" id="students">
          <div class="m-10" id="image2">
            <img src={section2} alt="devDirect" />
          </div>
          <div className="flex flex-col section2size mr-12">
            <h1 className="text-5xl mb-5 font-bold text-center">Students</h1>
            <span class="text-xl mb-5 text-center">
              Work Smarter, Not Harder
            </span>
            <p class="mb-5 text-center">
              Create a profile and showcase the many ways you stand out from the
              rest!
            </p>
            <div class="grid grid-cols-2 text-center" id="spanHolder">
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                Portfolio
              </span>
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                Resume
              </span>
              <span
                class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg"
                id="recommendationsHolder"
              >
                Social Tags
              </span>
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                Education
              </span>
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                About Me
              </span>
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                Languages
              </span>
            </div>
          </div>
        </section>

        <hr class="breakline" />

        <section class="flex flex-row justify-evenly" id="employers">
          <div class="m-10" id="image3">
            <img src={section3} alt="devDirect" />
          </div>
          <div className="flex flex-col section3size mr-12">
            <h1 className="text-5xl mb-5 font-bold text-center">Employers</h1>
            <span class="text-xl mb-5 text-center">Quality Over Quantity</span>
            <p class="mb-5 text-center">
              Stop sifting through hundreds of applications, where only half the
              applicants are qualified. Instead, use devDirect to find valuable,
              and eager career-minded individuals quickly. With our strong
              targeted sorting, it's never been easier!
            </p>
            <div class="grid grid-cols-2 text-center">
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                University / Bootcamp
              </span>
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                Grade Point Average
              </span>
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                Specific Languages
              </span>
              <span class="m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg">
                First/Last Name
              </span>
            </div>
          </div>
        </section>

        <div class="wavybot2">
          <svg viewBox="0 0 500 60" preserveAspectRatio="xMinYMin meet">
            <path
              class="change-my-color"
              d="M0,15 C350,100 450,10 600,0 L500,00 L0,0 Z"
            ></path>
          </svg>
        </div>

        <section class="practice-section" id="practice">
          <h1 class="text-center text-white text-5xl mb-8 pt-7">
            Practice Your Interviewing Skills
          </h1>
          <p class="text-center text-white">
            Showcasing your skills is only the first step.
          </p>
          <p class="text-center text-white">
            Learn how to nail any interview that comes your way, with practice!
          </p>
          <div class="flex flex-row justify-evenly pb-16">
            <div class="h-[325px] w-[540px] relative mt-14">
              <img src={technical} alt="" />
              <a href="https://www.codewars.com/">
                <button>
                  <div class="absolute bottom-0 px-4 py-3 bg-gray-600/75 w-full">
                    <h1 class="text-white font-semibold text-3xl">
                      {" "}
                      Technical Interview Practice{" "}
                    </h1>
                    <p class="text-gray-200">
                      Practice problems given to us by our partners.
                    </p>
                  </div>
                </button>
              </a>
            </div>
            <div class="h-[325px] w-[540px] relative mt-14">
              <img src={behavioral} alt="" />
              <a href="https://www.pramp.com/dev/uc-behavioral">
                <button>
                  <div class="absolute bottom-0 px-4 py-3 bg-gray-600/75 w-full">
                    <h1 class="text-white font-semibold text-3xl">
                      {" "}
                      Behavioral Interview Practice{" "}
                    </h1>
                    <p class="text-gray-200">
                      Learn better ways to answer questions about yourself.
                    </p>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </section>

        <section class="bg-white" id="contact">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
              Contact Us
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
              Are you an employer looking to create a recruit account? Want to
              help us improve by offering suggestions? Whatever your question,
              let us know!
            </p>
            <form
              method="POST"
              action="https://getform.io/f/d9a774f5-7e56-4e74-a9c4-3434d9883d69"
              class="space-y-8"
              onSubmit={() => {
                setEmail("");
                setSubject("");
                setMessage("");
              }}
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Type in your email address"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Landing;
