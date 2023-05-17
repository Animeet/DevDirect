import { useState } from "react";
import axios from "axios";

function Dashboard(props) {
  //setting up error message
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    portfolioLink: "",
    resumeLink: "",
    bio: "",
    githubLink: "",
    linkedInLink: "",
    university: "",
    bootcamp: "",
    languages: [],
  });

  const handleInputChange = (e) => {
    const prop = e.target.name;
    setFormData({
      ...formData,
      [prop]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/portfolios", formData);

      props.setUser(res.data.user);
      setFormData({
        portfolioLink: "",
        resumeLink: "",
        bio: "",
        githubLink: "",
        linkedInLink: "",
        university: "",
        bootcamp: "",
        languages: "",
      });
    } catch (err) {
      setErrorMessage(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className=" flex flex-row justify-between p-6">
        <label
          for="portfolioLink"
          className="font-medium text-gray-900 underline"
        >
          Portfolio:
        </label>
        <input
          type="text"
          name="portfolioLink"
          id="portfolioLink"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
          placeholder="Portfolio URL"
          value={formData.portfolioLink}
          onChange={handleInputChange}
          required=""
        />
      </div>

      <hr />

      <div className=" flex flex-row justify-between p-6">
        <label for="resumeLink" className="font-medium text-gray-900 underline">
          Resume:
        </label>
        <input
          type="text"
          name="resumeLink"
          id="resumeLink"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
          placeholder="Resume URL"
          value={formData.resumeLink}
          onChange={handleInputChange}
          required=""
        />
      </div>

      <hr />

      <div className=" flex flex-row justify-between p-6">
        <label for="bio" class="font-medium text-gray-900 underline">
          Bio:
        </label>
        <textarea
          name="bio"
          onChange={handleInputChange}
          value={formData.bio}
          id="message"
          rows="6"
          class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>

      <hr />

      <div className=" flex flex-row justify-between p-6">
        <label for="languages" className="font-medium text-gray-900 underline">
          Languages:
        </label>
        <input
          type="text"
          name="languages"
          id="languages"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
          placeholder="Languages Learned"
          value={formData.languages}
          onChange={handleInputChange}
          required=""
        />
      </div>

      <hr />

      <div className=" flex flex-row justify-between p-6">
        <label
          for="linkedInLink"
          className="font-medium text-gray-900 underline"
        >
          LinkedIn:
        </label>
        <input
          type="text"
          name="linkedInLink"
          id="linkedInLink"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
          placeholder="LinkedIn URL"
          value={formData.linkedInLink}
          onChange={handleInputChange}
          required=""
        />
      </div>

      <hr />

      <div className=" flex flex-row justify-between p-6">
        <label for="githubLink" className="font-medium text-gray-900 underline">
          Github:
        </label>
        <input
          type="text"
          name="githubLink"
          id="githubLink"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
          placeholder="Github URL"
          value={formData.githubLink}
          onChange={handleInputChange}
          required=""
        />
      </div>

      <hr />

      <div className=" flex flex-row justify-between p-6">
        <label for="university" className="font-medium text-gray-900 underline">
          University:
        </label>
        <input
          type="text"
          name="university"
          id="university"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
          placeholder="University Name"
          value={formData.university}
          onChange={handleInputChange}
          required=""
        />
      </div>

      <hr />

      <div className=" flex flex-row justify-between p-6">
        <label for="bootcamp" className="font-medium text-gray-900 underline">
          Bootcamp:
        </label>
        <input
          type="text"
          name="bootcamp"
          id="bootcamp"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2 w-3/4"
          placeholder="Bootcamp Name"
          value={formData.bootcamp}
          onChange={handleInputChange}
          required=""
        />
      </div>

      <hr />
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/4 m-4 text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Save
        </button>
      </div>

      <div>
        <h4>Portfolio: {formData.portfolioLink}</h4>
        <h4>Resume: {formData.resumeLink}</h4>
        <h4>Bio: {formData.bio}</h4>
        <h4>GitHub: {formData.githubLink}</h4>
        <h4>LinkedIn: {formData.linkedInLink}</h4>
        <h4>University: {formData.university}</h4>
        <h4>Bootcamp: {formData.bootcamp}</h4>
        <h4>Languages: {formData.languages}</h4>
      </div>
    </form>
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
