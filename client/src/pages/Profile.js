import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import linkedinlogo from "../images/linkedinlogo.png";
import githublogo from "../images/githublogo.png";

function Profile() {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState({
    user: {
      first_name: "",
      last_name: "",
      university: "",
      resumeLink: "",
      githubLink: "",
      linkedinLink: "",
    },
    portfolioLink: "",
  });

  // function to check if user is logged in
  useEffect(() => {
    axios
      .get(`/api/portfolios/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.portfolio);
        setPortfolio(res.data.portfolio);
      });
  }, [id]);

  return (
    <div key={portfolio._id}>
      <section class="flex justify-center registerbody">
        <div
          class="m-10 p-8 bg-white rounded-2xl profiledesign boxyshadow"
          id="updateView"
        >
          <h2 class="text-8xl text-center p-8 font-medium" id="userName">
            {portfolio?.user?.first_name + " " + portfolio?.user?.last_name}
          </h2>

          <hr />

          <div className="flex justify-center" id="universityName">
            <span class="text-center w-3/4 text-lg p-8">{portfolio.bio}</span>
          </div>

          <hr />

          <div class="flex flex-row justify-evenly p-8 mt-4">
            <div class="flex flex-col w-1/2">
              <h2 class="text-center text-4xl font-medium mb-4">University</h2>
              <h3 class="text-center text-lg p-8">{portfolio.university}</h3>
            </div>
            <div class="flex flex-col w-1/2">
              <h2 class="text-center text-4xl font-medium mb-4">Bootcamp</h2>
              <h3 class="text-center text-lg p-8">{portfolio.bootcamp}</h3>
            </div>
          </div>

          <div class="flex justify-center">
            <hr class="w-3/4" />
          </div>

          <div class="flex flex-row justify-evenly p-8 mb-4">
            <div class="flex flex-col w-1/2">
              <a
                class="text-center mt-6 mx-8 text-xl font-medium bg-sky-400 p-2 rounded-lg text-white boxyshadow"
                href={portfolio.portfolioLink}
              >
                <h1>Live Portfolio</h1>
              </a>
            </div>
            <div class="flex flex-col w-1/2">
              <a
                class="text-center mt-6 mx-8 text-xl font-medium bg-sky-400 p-2 rounded-lg text-white boxyshadow"
                href={portfolio.resumeLink}
              >
                <h1>Resume</h1>
              </a>
            </div>
          </div>

          <hr />

          <div
            class="flex flex-row items-center justify-center p-10"
            id="github"
          >
            <div className="flex justify-between w-1/2">
              <a href={portfolio.githubLink} target="_blank">
                <img src={githublogo} alt="githublogo" class="" />
              </a>
              <a href={portfolio.linkedInLink} target="_blank">
                <img src={linkedinlogo} alt="linkedInlogo" class="" />
              </a>
            </div>
          </div>

          <div class="flex justify-center">
            <hr class="w-3/4" />
          </div>

          <div>
            <h4 class="text-center text-4xl p-8">Programming Languages</h4>
            <div class="flex flex-row justify-evenly pb-8">
              <h5 class="text-xl">{portfolio.languages}</h5>
            </div>
          </div>

          <div class="flex justify-center">
            <hr class="w-3/4" />
          </div>

          <div class="flex justify-center p-8 mt-3">
            <a
              class="bg-green-400 text-white font-medium px-8 py-3 rounded-lg boxyshadow"
              href={`mailto:${portfolio.user.email}`}
            >
              Contact Via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
