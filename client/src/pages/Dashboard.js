import Header from "../components/Header";
import Footer from "../components/Footer";


function Dashboard(props) {
    return (
        <div>
            <Header />

            <section class="registerbody dashform">
                <div class="dashsize flex flex-col m-6">
                    <h1 class="text-center p-10 font-bold text-5xl tracking-wider">Student Dashboard</h1>

                    <hr />


                    <div class=" flex flex-row justify-between p-6">
                        <label for="portfolio" class="font-medium text-gray-900 underline">Portfolio:</label>
                        <input type="text" name="portfolio" id="portfolio"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Portfolio URL" required="" />
                    </div>

                    <hr />

                    <div class=" flex flex-row justify-between p-6">
                        <label for="resume" class="font-medium text-gray-900 underline">Resume:</label>
                        <input type="text" name="resume" id="resume"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Resume URL" required="" />
                    </div>

                    <hr />

                    <div class=" flex flex-row justify-between p-6">
                        <label for="bio" class="font-medium text-gray-900 underline">Bio:</label>
                        <input type="text" name="bio" id="bio"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Tell a little about yourself" required="" />
                    </div>

                    <hr />

                    <div class=" flex flex-row justify-between p-6">
                        <label for="languages" class="font-medium text-gray-900 underline">Languages:</label>
                        <input type="text" name="languages" id="languages"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Languages Learned" required="" />
                    </div>

                    <hr />

                    <div class=" flex flex-row justify-between p-6">
                        <label for="linkedin" class="font-medium text-gray-900 underline">LinkedIn:</label>
                        <input type="text" name="linkedin" id="linkedin"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="LinkedIn URL" required="" />
                    </div>

                    <hr />

                    <div class=" flex flex-row justify-between p-6">
                        <label for="twitter" class="font-medium text-gray-900 underline">Twitter:</label>
                        <input type="text" name="twitter" id="twitter"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Twitter URL" required="" />
                    </div>

                    <hr />

                    <div class=" flex flex-row justify-between p-6">
                        <label for="github" class="font-medium text-gray-900 underline">Github:</label>
                        <input type="text" name="github" id="github"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Github URL" required="" />
                    </div>

                    <hr />

                    <div class="flex justify-center">
                        <button type="submit"
                            class="w-1/4 m-4 text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Dashboard;