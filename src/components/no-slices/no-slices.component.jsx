import { Link } from "react-router-dom";

const NoSlices = () => {
  return (
    <div className="columns mt-5">
      <div className="column is-6 is-offset-3 box has-background-white">
        <div className="content has-text-centered p-3">
          <h1 className="title is-4 mb-5">You currently have no slices</h1>

          <Link to="/">
            <span className="button  is-link">Add a Slice</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoSlices;
