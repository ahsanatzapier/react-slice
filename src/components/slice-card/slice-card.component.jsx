import { Link } from "react-router-dom";
import {
  removeSliceFromSliceArray,
  getUserSlicesFromArray,
} from "../../utils/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { SlicesContext } from "../../contexts/slices.context";

const SliceCard = ({ slice, classStyle }) => {
  const { currentUser } = useContext(UserContext);
  const { setCurrentSlices, setSlicesLoaded } = useContext(SlicesContext);

  const deleteHandler = async () => {
    try {
      await removeSliceFromSliceArray(currentUser, slice);
    } catch (error) {
      console.log(error.message);
    }
    const setSlices = async () => {
      const { slices } = await getUserSlicesFromArray(currentUser);
      setCurrentSlices(slices);
      setSlicesLoaded(true);
    };

    setSlices();
  };

  return (
    // <div className="columns">
    <div className="content box">
      <h1 className="title is-3 mb-5 has-text-link">
        <h1 className="title is-4 mb-5 has-text-link">
          <a href={slice.link}>{slice.title}</a>
        </h1>
      </h1>

      {/* <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Category</span>
                  <span className="tag is-primary has-text-black">
                    {slice.category}
                  </span>
                </div>
              </div> */}

      {/* <div className="control">
        <div className="tags has-addons">
          <span className="tag is-dark">Time Allocated</span>
          <span className="tag is-success has-text-black">
            {slice.timeToFinish}
          </span>
        </div>
      </div> */}

      {/* <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Added</span>
                  <span className="tag is-primary has-text-black">
                    {slice.createdAt.seconds}
                  </span>
                </div>
              </div> */}

      {/* <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Status</span>
                  <span className="tag is-warning has-text-black">
                    {slice.status}
                  </span>
                </div>
              </div> */}
      {/* 
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Sharing Status</span>
                  <span className="tag is-light has-text-black">
                    {slice.shareStatus}
                  </span>
                </div>
              </div> */}
      {/* </div> */}

      <h1 className="title is-5 mb-2">Description</h1>

      <p className="has-text-grey is-size-6 truncate">{slice.description}</p>
      <hr></hr>

      {/* <Link to="/">
              <span className="button is-link mr-2">Details</span>
            </Link> */}
      {/* <Link to="/">
              <span className="button is-danger mr-2">Edit</span>
            </Link> */}

      <span className="button is-dark" onClick={deleteHandler}>
        Delete
      </span>
    </div>
    // </div>
    // </div>
  );
};

export default SliceCard;
