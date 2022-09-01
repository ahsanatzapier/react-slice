import { useState } from "react";
import { addSliceToSliceArray } from "../../utils/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { SlicesContext } from "../../contexts/slices.context";
import { useNavigate } from "react-router-dom";

import { getUserSlicesFromArray } from "../../utils/firebase.utils";

const defaultFromFields = {
  title: "",
  description: "",
  link: "",
  category: "Frontend",
  timeToFinish: "1 Day",
  shareStatus: "Private",
};

const NewSliceForm = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { title, description, link, category, timeToFinish, shareStatus } =
    formFields;
  const { currentUser } = useContext(UserContext);
  const { setCurrentSlices, setSlicesLoaded } = useContext(SlicesContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFromFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const createdAt = new Date();
    const updatedAt = new Date();
    const sid = new Date().valueOf();

    const sliceObject = {
      createdAt,
      updatedAt,
      sid,
      ...formFields,
    };

    try {
      await addSliceToSliceArray(currentUser, sliceObject);
      resetFormFields();

      const setSlices = async () => {
        const { slices } = await getUserSlicesFromArray(currentUser);
        setCurrentSlices(slices);
        setSlicesLoaded(true);
      };

      setSlices();
      navigate("/slices");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="columns  mt-5">
      <div className="column is-6 is-offset-3 box has-background-white">
        <div className="content p-3">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <h1 className="title pb-0 mt-3">Add New Slice</h1>
              <label className="label">Title</label>

              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Ex. Learning Next.JS"
                  onChange={handleChange}
                  name="title"
                  value={title}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Example. A course dedicated to learning Next.JS"
                  onChange={handleChange}
                  name="description"
                  value={description}
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Link</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Ex. http://next.js"
                  onChange={handleChange}
                  name="link"
                  value={link}
                  autoCapitalize="Private"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  <select
                    value={category}
                    onChange={handleChange}
                    name="category"
                  >
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Estimated Time Commitment</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Ex. 60"
                  onChange={handleChange}
                  name="timeToFinish"
                  value={timeToFinish}
                  required
                />
                <p className="help has-text-grey pb-0">
                  Ex. 1 Hour • 2 Days • 3 Weeks
                </p>
              </div>
            </div>

            <div className="field">
              <label className="label">Sharing Preference</label>
              <div className="control">
                <div className="select">
                  <select
                    value={shareStatus}
                    onChange={handleChange}
                    name="shareStatus"
                  >
                    <option>Private</option>
                    <option>Public</option>
                  </select>
                </div>
              </div>
            </div>

            <hr></hr>

            <div className="field is-grouped">
              <button type="submit" className="button is-link mr-2">
                Submit
              </button>

              {/* <button
                type="button"
                // onClick={resetForm}
                className="button is-link has-background-dark"
              >
                Reset Form
              </button> */}

              {/* <Link to="/">
                <span className="button is-danger ml-2">Cancel</span>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSliceForm;
