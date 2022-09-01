import { Link } from "react-router-dom";

const NoSlices = () => {
  return (
    <div className="content has-text-centered box p-3">
      <h1 className="title is-4 mb-5">You currently have no Slices</h1>

      <Link to="/addslice">
        <span className="button is-link">Add a Slice</span>
      </Link>
    </div>
  );
};

export default NoSlices;
