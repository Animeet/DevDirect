import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function Profile() {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    // function to check if user is logged in
    useEffect(() => {
      axios.get(`/api/portfolios/${id}`, { withCredentials: true })
        .then(res => {
          console.log(res.data.portfolio)
          setPortfolio(res.data.portfolio);
        })
    }, []);

  return (
    <div>
      <section class="flex justify-center registerbody profilepage">
        <div class="m-10 p-8 bg-white rounded-2xl profiledesign">
          <h1 class="text-8xl p-8 font-medium">{portfolio?.user?.first_name + ' ' + portfolio?.user?.last_name}</h1>

          <hr />

          <h3 class="text-center text-4xl p-8">{portfolio?.user?.university}</h3>

          <div class="flex justify-center">
            <hr class="w-3/4" />
          </div>

          <div class="flex flex-row justify-evenly p-8">
            <div class="flex flex-col">
              <p class="text-center text-4xl underline">Portfolio</p>
              <a class="text-center" href="">
              {portfolio?.user?.portfolioLink}
              </a>
            </div>
            <div class="flex flex-col">
              <p class="text-center text-4xl underline">Resume</p>
              <a class="text-center" href="">
              {portfolio?.user?.resumeLink}
              </a>
            </div>
          </div>

          <div class="flex justify-center">
            <hr class="w-3/4" />
          </div>

          <div class="flex flex-row justify-evenly p-8">
            <div class="flex flex-col">
              <p class="text-center text-4xl underline">Github</p>
              <a class="text-center" href="">
              {portfolio?.user?.githubLink}
              </a>
            </div>
            <div class="flex flex-col">
              <p class="text-center text-4xl underline">LinkedIn</p>
              <a class="text-center" href="">
              {portfolio?.user?.linkedinLink}
              </a>
            </div>
          </div>

          <div class="flex justify-center">
            <hr class="w-3/4" />
          </div>

          <div>
            <h3 class="text-center text-4xl p-8">Programming Languages</h3>
            <div class="flex flex-row justify-evenly pb-8">
              <h5 class="text-xl">{portfolio?.user?.languages[0]}</h5>
              {/* is targeting index 0 correct? */}
              {/* <h5 class="text-xl">Python</h5>
              <h5 class="text-xl">Java</h5> */}
            </div>
          </div>

          <div class="flex justify-center">
            <hr class="w-3/4" />
          </div>

          <div class="flex justify-center p-8">
            <a
              class="bg-sky-300 px-8 py-3 rounded-lg"
              href={portfolio?.user?.email}
            >
              
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
