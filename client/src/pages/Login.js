import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  return (
    <div>
      <Header />

      <section className="flex justify-center p-8 registerbody loginform">
        <div className="mb-14 p-6 space-y-4 md:space-y-6 sm:p-8 loginsize bg-white tab">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Login
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
            <p class="text-sm font-light text-gray-500">
              Don't have an account?{" "}
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline"
              >
                Register Now
              </a>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Login;
