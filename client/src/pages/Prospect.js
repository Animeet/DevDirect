function Prospect() {
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
            <a href="">
              <div class="formdimension bg-white p-3 rounded-lg">
                <p class="pb-2 text-red-500">Javascript</p>
                <hr />
                <p class="text-center text-4xl p-8 text-bold">Zachary Barnes</p>
                <hr />
                <div class="flex flex-row justify-center pt-2">
                  <p class="text-center font-medium">
                    Rutger's Full-Stack Bootcamp
                  </p>
                </div>
              </div>
            </a>

            <a href="">
              <div class="formdimension bg-white p-3 rounded-lg">
                <p class="pb-2 text-red-500">Javascript</p>
                <hr />
                <p class="text-center text-4xl p-8 text-bold">James Sciacca</p>
                <hr />
                <div class="flex flex-row justify-center pt-2">
                  <p class="text-center font-medium">
                    NJ Institute of Technology
                  </p>
                </div>
              </div>
            </a>

            <a href="">
              <div class="formdimension bg-white p-3 rounded-lg">
                <p class="pb-2 text-green-500">Python</p>
                <hr />
                <p class="text-center text-4xl p-8 text-bold">Nick Zentai</p>
                <hr />
                <div class="flex flex-row justify-center pt-2">
                  <p class="text-center font-medium">Monmouth University</p>
                </div>
              </div>
            </a>

            <a href="">
              <div class="formdimension bg-white p-3 rounded-lg">
                <p class="pb-2 text-blue-500">C++</p>
                <hr />
                <p class="text-center text-4xl p-8 text-bold">Megan Mathis</p>
                <hr />
                <div class="flex flex-row justify-center pt-2">
                  <p class="text-center font-medium">University of Florida</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prospect;
