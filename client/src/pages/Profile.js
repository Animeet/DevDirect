import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Profile() {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState({
      user: {
        first_name: '',
        last_name: '',
        university: '',
        resumeLink: '',
        githubLink: '',
        linkedinLink: '',
      },
      portfolioLink: '',
    });

    // function to check if user is logged in
    useEffect(() => {
      axios.get(`/api/portfolios/${id}`, { withCredentials: true })
        .then(res => {
          console.log(res.data.portfolio)
          setPortfolio(res.data.portfolio);
        })
    }, [id]);

  return (
    <div>
      <section class="flex justify-center registerbody profilepage">
        <div class="m-10 p-8 bg-white rounded-2xl profiledesign">
          <h1 class="text-8xl text-center p-8 font-medium">{portfolio?.user?.first_name + ' ' + portfolio?.user?.last_name}</h1>

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
            <h3 class="text-center text-4xl p-8">Programming Languages</h3>
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
    </div>
  );
}

export default Profile;
