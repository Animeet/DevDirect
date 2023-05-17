import { useEffect, useState } from "react";
import PortfolioForm from "../components/PortfolioForm";
import axios from "axios";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [formDetails, setFormDetails] = useState({
    isUpdate: false,
    id: "",
  });

  useEffect(() => {
    axios.get("/api/portfolios").then((res) => {
      setPortfolios(res.data);
    });
  }, [portfolios]);

  const handlePortfolioUpdate = (id) => {
    const portfolio = portfolios.find((p) => p._id === id);

    setFormDetails({
      isUpdate: true,
      data: portfolio,
    });
    setShowForm(true);
  };

  return (
    <>
      {showForm && (
        <PortfolioForm
          formDetails={formDetails}
          setShowForm={setShowForm}
          portfolios={portfolios}
          setPortfolios={setPortfolios}
        />
      )}
      <button onClick={() => setShowForm(true)}>Add Portfolio</button>
      {portfolios.map((portfolio) => {
        return (
          <div key={portfolio._id}>
            <h2>{portfolio.bio}</h2>
            <button onClick={() => handlePortfolioUpdate(portfolio._id)}>
              Update
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Dashboard;

{
  /* <div>
            <section className="registerbody dashform">
                <div className="dashsize flex flex-col m-12">
                    <h1 className="text-center p-10 font-bold text-5xl tracking-wider">Student Dashboard</h1>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="portfolio" className="font-medium text-gray-900 underline">Portfolio:</label>
                        <input type="text" name="portfolio" id="portfolio"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Portfolio URL" required="" />
                    </div>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="resume" className="font-medium text-gray-900 underline">Resume:</label>
                        <input type="text" name="resume" id="resume"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Resume URL" required="" />
                    </div>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="bio" class="font-medium text-gray-900 underline">Bio:</label>
                        <textarea
                            id="message"
                            rows="6"
                            class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="languages" className="font-medium text-gray-900 underline">Languages:</label>
                        <input type="text" name="languages" id="languages"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Languages Learned" required="" />
                    </div>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="linkedin" className="font-medium text-gray-900 underline">LinkedIn:</label>
                        <input type="text" name="linkedin" id="linkedin"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="LinkedIn URL" required="" />
                    </div>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="github" className="font-medium text-gray-900 underline">Github:</label>
                        <input type="text" name="github" id="github"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Github URL" required="" />
                    </div>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="university" className="font-medium text-gray-900 underline">University:</label>
                        <input type="text" name="university" id="university"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="University Name" required="" />
                    </div>

                    <hr />

                    <div className=" flex flex-row justify-between p-6">
                        <label for="bootcamp" className="font-medium text-gray-900 underline">Bootcamp:</label>
                        <input type="text" name="bootcamp" id="bootcamp"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
                            placeholder="Bootcamp Name" required="" />
                    </div>

                    <hr />

                    <div className="flex justify-center">
                        <button type="submit"
                            className="w-1/4 m-4 text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                    </div>
                </div>
            </section>
        </div> */
}
