import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Prospect() {
  const [portfolios, setPortfolios] = useState([]);

  // function to check if user is logged in
  useEffect(() => {
    axios.get(`/api/portfolios/all`, { withCredentials: true }).then((res) => {
      console.log(res.data);
      setPortfolios(res.data);
    });
  }, []);
  return (
    <div>
      <section class="flex justify-center registerbody prospectpage">
        <div class="flex flex-col m-8">
          <div class="flex justify-center pb-10">
            <input
              onChange=""
              class="text-center border-2 border-gray-300 bg-white h-10 p-6 rounded-lg text-lg focus:outline-none"
              type="text"
              placeholder="Search Prospects"
            />
          </div>

          <div class="grid-forms">
            {portfolios.map((portfolio) => {
              return (
                <a href={`/profile/${portfolio._id}`}>
                  <div class="formdimension bg-white p-3 rounded-lg">
                    <p class="pb-2 text-red-500">{portfolio.languages}</p>
                    <hr />
                    <p class="text-center text-4xl p-8 text-bold">
                      {portfolio?.user?.first_name + " " + portfolio?.user?.last_name}
                    </p>
                    <hr />
                    <div class="flex flex-row justify-center pt-2">
                      <p class="text-center font-medium">
                      {portfolio?.user?.university}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prospect;
