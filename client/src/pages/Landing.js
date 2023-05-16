import Header from '../components/Header';
import Footer from '../components/Footer';
import section1 from '../images/section1.png';
import section2 from '../images/section2.png';
import section3 from '../images/section3.png';
import technical from '../images/technical.png';
import behavioral from '../images/behavioral.png';
import $ from 'jquery';

function Landing() {

    $(document).on("click","a",function(e){
        e.preventDefault();
        var id = $(this).attr("href"),
            topSpace = 30;
        $('html, body').animate({
            scrollTop: $(id).offset().top - topSpace
        }, 400);
    });


    return (
        <main>
            <Header />
            <div>
                <section className='flex flex-row justify-evenly bg-sky-100' id='about'>
                    <div className='flex flex-col section1size mr-12'>
                        <h1 className='text-5xl mb-10 font-bold text-center'>Get Connected, Quicker</h1>
                        <p className='mb-10'>devDirect is the leading application designed to get students into the industry quicker by connecting them with employers.</p>
                        <p className='mb-2'> For students, gain passive attention from potential employers!</p>
                        <p className='mb-10'>For employers, it's never been easier to find quality developing minds!</p>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200">
                            <span class="relative px-5 text-white py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                Sign Up Today
                            </span>
                        </button>
                    </div>
                    <div class="mt-10 mr-10">
                        <img src={section1} alt="devDirect" />
                    </div>
                </section>


                <div class="wavybot1">
                    <svg viewBox="0 0 500 60" preserveAspectRatio="xMinYMin meet">
                        <path class="change-my-color" d="M0,30 C150,80 350,0 500,30 L500,00 L0,0 Z"></path>
                    </svg>
                </div>


                <section class='flex flex-row justify-evenly' id='students'>
                    <div class='m-10'>
                        <img src={section2} alt="devDirect" />
                    </div>
                    <div className='flex flex-col section2size mr-12'>
                        <h1 className='text-5xl mb-5 font-bold text-center'>Students</h1>
                        <span class='text-xl mb-5 text-center'>Work Smarter, Not Harder</span>
                        <p class='mb-5 text-center'>Create a profile and showcase the many ways you stand out from the rest!</p>
                        <div class='grid grid-cols-2 text-center'>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Portfolio</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Resume</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Recommendations</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Course Grades</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Skills</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Languages</span>
                        </div>
                    </div>
                </section>


                <hr class="breakline" />


                <section class='flex flex-row justify-evenly' id='employers'>
                    <div class='m-10'>
                        <img src={section3} alt="devDirect" />
                    </div>
                    <div className='flex flex-col section3size mr-12'>
                        <h1 className='text-5xl mb-5 font-bold text-center'>Employers</h1>
                        <span class='text-xl mb-5 text-center'>Quality Over Quantity</span>
                        <p class='mb-5 text-center'>Stop sifting through hundreds of applications, where only half the applicants are qualified. Instead, use devDirect to find valuable, and eager career-minded individuals quickly. With our strong targeted sorting, it's never been easier!</p>
                        <div class='grid grid-cols-2 text-center'>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Recently Graduated</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Grade Point Average</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>Specific Languages</span>
                            <span class='m-3 p-2 bg-sky-100 rounded-xl font-medium shadow-lg'>So Much More</span>
                        </div>
                    </div>
                </section>


                <div class="wavybot2">
                    <svg viewBox="0 0 500 60" preserveAspectRatio="xMinYMin meet">
                        <path class="change-my-color" d="M0,15 C350,100 450,10 600,0 L500,00 L0,0 Z"></path>
                    </svg>
                </div>


                <section class='practice-section' id='practice'>
                    <h1 class='text-center text-white text-5xl mb-8 pt-7'>Practice Your Interviewing Skills</h1>
                    <p class='text-center text-white'>Showcasing your skills is only the first step.</p>
                    <p class='text-center text-white'>Learn how to nail any interview that comes your way, with practice!</p>
                    <div class='flex flex-row justify-evenly'>
                        <div class="h-[325px] w-[540px] relative mt-14">
                            <img src={technical} alt="" />
                            <button><div class="absolute bottom-0 px-4 py-3 bg-gray-600/75 w-full">
                                <h1 class="text-white font-semibold text-3xl"> Technical Interview Practice </h1>
                                <p class="text-gray-200">
                                    Practice problems given to us by our partners.
                                </p>
                            </div></button>
                        </div>
                        <div class="h-[325px] w-[540px] relative mt-14">
                            <img src={behavioral} alt="" />
                            <button><div class="absolute bottom-0 px-4 py-3 bg-gray-600/75 w-full">
                                <h1 class="text-white font-semibold text-3xl"> Behavioral Interview Practice </h1>
                                <p class="text-gray-200">
                                    Learn better ways to answer questions about yourself.
                                </p>
                            </div></button>
                        </div>
                    </div>
                </section>

                <section class="bg-white" id='contact'>
                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Are you an employer looking to create a recruit account? Want to help us improve by offering suggestions? Whatever your question, let us know!</p>
                        <form action="#" class="space-y-8">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Type in your email address" required />
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}

export default Landing;