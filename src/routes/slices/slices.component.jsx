import NoSlices from "../../components/no-slices/no-slices.component";
import { Fragment, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { getUserSlicesFromArray } from "../../utils/firebase.utils";
import { SlicesContext } from "../../contexts/slices.context";
import SliceCard from "../../components/slice-card/slice-card.component";

const Slices = () => {
  const { currentSlices, slicesLoaded, setSlicesLoaded } =
    useContext(SlicesContext);
  const { userLoaded } = useContext(UserContext);

  console.log(slicesLoaded);
  console.log(currentSlices);

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
            <div className="container">
              <div className="columns is-multiline is-centered">
                {currentSlices && slicesLoaded && (
                  <>
                    {currentSlices.length > 0 && (
                      <>
                        {currentSlices.map((slice) => (
                          <div className="column is-6" key={slice.sid}>
                            <SliceCard slice={slice} />
                          </div>
                        ))}
                      </>
                    )}

                    {currentSlices.length === 0 && (
                      <div className="column is-6">
                        <NoSlices />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Slices;
