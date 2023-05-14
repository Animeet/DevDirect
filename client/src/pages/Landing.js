import Header from '../components/Header';
import Footer from '../components/Footer';
import section1 from '../images/section1.png';

function Landing() {
    return (
        <main>
            <Header />
            <div>
                <section className='flex flex-row justify-evenly bg-sky-100'>
                    <div className='flex flex-col section1size mr-12'>
                        <h1 className='text-5xl mb-10 font-bold'>Get Connected, Quicker</h1>
                        <p className='mb-10'>devDirect is the leading application designed to get students into the industry quicker by connecting them with employers.</p>
                        <p className='mb-2'> For students, gain passive attention from potential employers</p>
                        <p className='mb-10'>For employers, it's never been easier to find quality developing minds.</p>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Sign Up Today
                            </span>
                        </button>
                    </div>
                    <div class="mt-10 mr-10">
                        <img src={section1} alt="devDirect" />
                    </div>
                </section>
                <div class="wavybot">
                    <svg viewBox="0 0 500 47" preserveAspectRatio="xMinYMin meet">
                        <path class="change-my-color" d="M0,30 C150,80 350,0 500,30 L500,00 L0,0 Z"></path>
                    </svg>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Landing;