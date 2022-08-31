// import Typed from "react-typed";
import { Link } from "react-router-dom";
import { ReactComponent as SliceLogo } from "../../assets/slice.svg";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Home = () => {
  const sliceDescriptions = ["collect", "organize", "manage"];
  const { userLoaded } = useContext(UserContext);

  return (
    <Fragment>
      {!userLoaded && <div></div>}
      {userLoaded && (
        <div className="hero is-fullheight-with-navbar has-background">
          <img
            className="hero-background is-align-items-stretch is-transparent"
            src="https://img.freepik.com/free-photo/pink-brush-texture_95678-138.jpg?w=1380&t=st=1661810082~exp=1661810682~hmac=616e62d0cd832c48f82b690f6a4e9ef8d7fd12a50c31a0954ff3dee38169ce59"
          />
          <div className="hero-body  is-align-items-stretch">
            <div className="container  is-flex">
              <div className="columns is-centered is-vcentered is-flex-grow-1">
                <div className="column is-narrow has-text-centered">
                  <header className="SectionHeader">
                    <SliceLogo />
                    <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                      The easy way
                    </h1>
                    <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                      to{" "}
                      {/* <Typed
                        loop
                        typeSpeed={90}
                        backSpeed={50}
                        strings={sliceDescriptions}
                        backDelay={1000}
                        loopCount={0}
                        showCursor={false}
                        className="title has-text-weight-bold is-3 is-size-3-mobile is-spaced has-text-link"
                        cursorChar="|"
                      /> */}
                    </h1>
                    <div>
                      <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                        resources for
                      </h1>
                      <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                        your PIE journey
                      </h1>
                    </div>
                  </header>
                  <Link to="/auth">
                    <div className="buttons is-inline-flex mt-5">
                      <button className="button is-link is-medium">
                        Get Started
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
