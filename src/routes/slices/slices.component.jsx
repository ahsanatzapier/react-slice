import NoSlices from "../../components/no-slices/no-slices.component";
import { Fragment, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { getUserSlicesFromArray } from "../../utils/firebase.utils";
import { SlicesContext } from "../../contexts/slices.context";

const Slices = () => {
  const { currentSlices, setCurrentSlices } = useContext(SlicesContext);
  const { currentUser, userLoaded } = useContext(UserContext);
  console.log("Slice - Current User", currentUser);
  console.log("Slice - Current Slices", currentSlices);

  // useEffect(() => {
  //   const getSlices = async () => {
  //     const slices = await getUserSlicesFromArray(currentUser);
  //     setCurrentSlices(slices);
  //   };

  //   getSlices();
  // }, []);

  return (
    <Fragment>
      {!userLoaded && <div></div>}
      {userLoaded && (
        <div className="hero is-fullheight-with-navbar has-background">
          <img
            className="hero-background is-align-items-stretch is-transparent"
            src="https://img.freepik.com/free-photo/pastel-pink-oil-paint-textured-background_53876-108408.jpg?w=2000&t=st=1661834847~exp=1661835447~hmac=8832ddc3409f0ccae4f35a07b68a47e390bcc7bfc48d6467afeb5acf4887ff79"
          />
          <div className="hero-body  is-align-items-stretch">
            <div className="container  is-flex">
              <div className="columns is-centered  is-flex-grow-1">
                <div className="column">
                  <NoSlices />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Slices;
