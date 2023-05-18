import { useState, useEffect } from "react";
import axios from "axios";

function PortfolioForm(props) {
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

  useEffect(() => {
    if (props.formDetails.isUpdate) {
      setFormData({
        ...props.formDetails.data,
      });
    }
  }, []);

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
      let res;

      if (props.formDetails.isUpdate) {
        res = await axios.put(
          `/api/portfolios/${props.formDetails.data._id}`,
          formData
        );
        props.setPortfolios([...props.portfolios]);
      } else {
        res = await axios.post("/api/portfolios", formData);
        props.setPortfolios([...props.portfolios, res.data.portfolio]);
      }

      props.setShowForm(false);
    } catch (err) {
      setErrorMessage(err.response.data.error);
    }
  };

  return (
    <div className="w-1/2 bg-white m-14 rounded-xl boxyshadow">
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
          <label
            for="resumeLink"
            className="font-medium text-gray-900 underline"
          >
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
          <label
            for="languages"
            className="font-medium text-gray-900 underline"
          >
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
          <label
            for="githubLink"
            className="font-medium text-gray-900 underline"
          >
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
          <label
            for="university"
            className="font-medium text-gray-900 underline"
          >
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
            {props.formDetails.isUpdate ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PortfolioForm;
