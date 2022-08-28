import Typed from "react-typed";
import { Link } from "react-router-dom";
import { ReactComponent as PIE } from "../../assets/pie.svg";

import "./home.style.css";

const Home = () => {
  const sliceDescriptions = ["collect", "organize", "manage"];

  return (
    <div>
      {/* <link rel="apple-touch-icon" href="/custom_icon.png" /> */}
      <section className=" SectionComponent hero section is-block is-relative is-medium">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-5-desktop has-text-centered-touch">
              <header className="SectionHeader">
                <h1 className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced mb-2 color-orange">
                  SLICE
                </h1>
                <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                  The easy way
                </h1>
                <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                  to{" "}
                  <Typed
                    loop
                    typeSpeed={90}
                    backSpeed={50}
                    strings={sliceDescriptions}
                    backDelay={1000}
                    loopCount={0}
                    showCursor={false}
                    className="title has-text-weight-bold is-3 is-size-3-mobile is-spaced has-text-link"
                    cursorChar="|"
                  />
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
            <div className="column is-1"></div>
            <div className="column">
              <PIE />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
