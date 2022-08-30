import { Link } from "react-router-dom";

const NewSliceForm = () => {
  return (
    <div className="columns mt-5">
      <div className="column is-6 is-offset-3 box has-background-white">
        <div className="content p-3">
          <form>
            <div className="field">
              <h1 className="title pb-0 mt-3">Add New Slice</h1>
              <label className="label">Title</label>

              <div className="control">
                <input
                  required
                  // onChange={handleChange}
                  name="title"
                  // value={form.title}
                  className="input"
                  type="text"
                  placeholder="Ex. Learning Next.JS"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>

              <div className="control">
                <textarea
                  // {...register("description", {
                  //   required: (
                  //     <p className="has-background-warning">
                  //       ⚠ Description is required
                  //     </p>
                  //   ),
                  // })}
                  // value={form.description}
                  // onChange={handleChange}
                  name="description"
                  className="textarea"
                  placeholder="Example. A course dedicated to learning Next.JS"
                ></textarea>
              </div>
            </div>

            <div className="field">
              <label className="label">Link</label>
              <div className="control">
                <input
                  // {...register("link", {
                  //   required: (
                  //     <p className="has-background-warning">⚠ Link is required</p>
                  //   ),
                  // })}
                  // value={form.link}
                  // onChange={handleChange}
                  name="link"
                  className="input"
                  type="text"
                  placeholder="Ex. http://next.js"
                  autoCapitalize="Private"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  {/* <select value={form.category} onChange={handleChange}> */}
                  <select>
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
                  // value={form.timeToFinish}
                  // onChange={handleChange}
                  name="timeToFinish"
                  className="input"
                  type="text"
                  placeholder="Ex. 60"
                />
                {/* {errors?.timeToFinish && errors.timeToFinish.message} */}
                <p className="help has-text-grey pb-0">
                  Ex. 1 Hour • 2 Days • 3 Weeks
                </p>
              </div>
            </div>

            <div className="field">
              <label className="label">Sharing Preference</label>
              <div className="control">
                <div className="select">
                  {/* <select value={form.sharedWith} onChange={handleChange}> */}
                  <select>
                    <option>Private</option>
                    <option>Public</option>
                  </select>
                </div>
                {/* {errors?.sharedWith && errors.sharedWith.message} */}
              </div>
            </div>

            <hr></hr>

            <div className="field is-grouped">
              <button
                type="button"
                // onClick={handleSubmit(submitForm)}
                className="button is-link mr-2"
              >
                Submit
              </button>
              <button
                type="button"
                // onClick={resetForm}
                className="button is-link has-background-dark"
              >
                Reset Form
              </button>

              <Link to="/">
                <span className="button is-danger ml-2">Cancel</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSliceForm;
