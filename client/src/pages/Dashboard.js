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
  const [portfolioCreated, setPortfolioCreated] = useState(false);

  useEffect(() => {
    axios.get("/api/portfolios").then((res) => {
      setPortfolios(res.data);
      setPortfolioCreated(res.data.length > 0);
    });
  }, []);

  const handlePortfolioUpdate = (id) => {
    const portfolio = portfolios.find((p) => p._id === id);

      setFormDetails({
        isUpdate: true,
        data: portfolio,
      });
      setShowForm(true);
    };

  const handlePortfolioDelete = (id) => {
    const portfolio = portfolios.find((p) => p._id === id);

    axios.delete("/api/portfolios/" + id).then((res) => {
      setPortfolios(portfolios.filter((p) => p._id !== id));
      window.location.reload();
    }
  );
};

    const handlePortfolioCreated = () => {
      setShowForm(false);
      setPortfolioCreated(true);
    };

    const handleAddPortfolioClick = () => {
      setShowForm(true);
    };

    return (
      <div className="registerbody flex justify-center">
        {showForm && (
          <PortfolioForm
            formDetails={formDetails}
            setShowForm={setShowForm}
            portfolios={portfolios}
            setPortfolios={setPortfolios}
            onPortfolioCreated={handlePortfolioCreated}
          />
        )}
        {!portfolioCreated && !showForm && portfolios.length === 0 && (
          <div className="flex justify-center addportfolio">
            <div className="h-1/2 bg-gray-100 align-middle p-4 portfolioform rounded-xl">
              <h1 className="text-2xl font-bold text-center py-8">
                Create Your Portfolio
              </h1>
              <button
                className="bg-sky-400 text-3xl text-white px-6 py-3 rounded-xl m-10"
                onClick={handleAddPortfolioClick}
              >
                Add Portfolio
              </button>
            </div>
          </div>
        )}
        {portfolios.map((portfolio) => {
          return (
            <div key={portfolio._id}>
              <section class="flex justify-center registerbody profilepage rounded-xl m-12">
                <div class="m-10 p-8 bg-white rounded-2xl profiledesign boxyshadow">
                  <h1 class="text-8xl text-center p-8 font-medium">
                    {portfolio?.user?.first_name +
                      " " +
                      portfolio?.user?.last_name}
                  </h1>

                  <hr />

                  <h3 class="text-center text-4xl p-8">{portfolio.university}</h3>

                  <div class="flex justify-center">
                    <hr class="w-3/4" />
                  </div>

                  <div class="flex flex-row justify-evenly p-8">
                    <div class="flex flex-col w-1/2">
                      <p class="text-center text-4xl underline">Portfolio</p>
                      <a class="text-center" href="">
                        {portfolio.portfolioLink}
                      </a>
                    </div>
                    <div class="flex flex-col w-1/2">
                      <p class="text-center text-4xl underline">Resume</p>
                      <a class="text-center" href="">
                        {portfolio.resumeLink}
                      </a>
                    </div>
                  </div>

                  <div class="flex justify-center">
                    <hr class="w-3/4" />
                  </div>

                  <div class="flex flex-row justify-evenly p-8">
                    <div class="flex flex-col w-1/2">
                      <p class="text-center text-4xl underline">Github</p>
                      <a class="text-center" href="">
                        {portfolio.githubLink}
                      </a>
                    </div>
                    <div class="flex flex-col w-1/2">
                      <p class="text-center text-4xl underline">LinkedIn</p>
                      <a class="text-center" href="">
                        {portfolio.linkedInLink}
                      </a>
                    </div>
                  </div>

                  <div class="flex justify-center">
                    <hr class="w-3/4" />
                  </div>

                  <div>
                    <h3 class="text-center text-4xl p-8">
                      Programming Languages
                    </h3>
                    <div class="flex flex-row justify-evenly pb-8">
                      <h5 class="text-xl">{portfolio.languages}</h5>
                    </div>
                  </div>

                  <div class="flex justify-center">
                    <hr class="w-3/4" />
                  </div>

                  <div class="flex justify-center p-8">
                    <a
                      class="bg-sky-300 px-8 py-3 rounded-lg"
                      href={`mailto:${portfolio.user.email}`}
                    >
                      Contact Via Email
                    </a>
                  </div>
                </div>
              </section>

              {/* <h2>{portfolio.bio}</h2> */}
              <div className="flex flex-row justify-center">
                <button
                  className="bg-white text-2xl font-medium px-8 py-3 mx-8 rounded-lg mb-10 boxyshadow"
                  onClick={() => handlePortfolioUpdate(portfolio._id)}
                >
                  Update
                </button>

                <button className="bg-red-500 text-2xl font-medium px-8 py-3 mx-8 rounded-lg mb-10 boxyshadow" onClick={() => handlePortfolioDelete(portfolio._id)}>DELETE</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }


export default Dashboard;
