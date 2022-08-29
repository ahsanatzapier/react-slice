import Typed from "react-typed";
import { Link } from "react-router-dom";
import { ReactComponent as PIE } from "../../assets/pie.svg";
import { ReactComponent as SliceLogo } from "../../assets/slice.svg";

import "./home.style.css";

const Home = () => {
  const sliceDescriptions = ["collect", "organize", "manage"];

  return (
    // <div>
    //   {/* <link rel="apple-touch-icon" href="/custom_icon.png" /> */}
    //   <section className=" SectionComponent hero section is-block is-relative is-medium">
    //     <div className="container">
    //       <div className="columns is-vcentered is-centered">
    //         <div className="column is-narrow has-text-centered">
    //           <header className="SectionHeader">
    //             <SliceLogo />
    //             {/* <h1 className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced mb-2 color-orange">
    //               SLICE
    //             </h1> */}
    //             <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
    //               The easy way
    //             </h1>
    //             <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
    //               to{" "}
    //               <Typed
    //                 loop
    //                 typeSpeed={90}
    //                 backSpeed={50}
    //                 strings={sliceDescriptions}
    //                 backDelay={1000}
    //                 loopCount={0}
    //                 showCursor={false}
    //                 className="title has-text-weight-bold is-3 is-size-3-mobile is-spaced has-text-link"
    //                 cursorChar="|"
    //               />
    //             </h1>
    //             <div>
    //               <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
    //                 resources for
    //               </h1>
    //               <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
    //                 your PIE journey
    //               </h1>
    //             </div>
    //           </header>
    //           <Link to="/auth">
    //             <div className="buttons is-inline-flex mt-5">
    //               <button className="button is-link is-medium">
    //                 Get Started
    //               </button>
    //             </div>
    //           </Link>
    //         </div>
    //         {/* <div className="column is-narrow">
    //           <PIE />
    //         </div> */}
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div>
      <div class="hero is-halfheight has-background">
        <img
          class="hero-background is-transparent"
          src="https://img.freepik.com/free-photo/abstract-empty-smooth-light-pink-studio-room-background-use-as-montage-product-display-banner-template_1258-71544.jpg?w=1380&t=st=1661767014~exp=1661767614~hmac=b2fb6f81a6ef101009f2c8bf49cb4fe23efa82fb513158389aefe273fe47fc4e"
        />
        <div class="hero-body">
          <div class="container has-text-centered">
            <div className="columns is-vcentered is-centered">
              <div className="column is-narrow has-text-centered">
                <header className="SectionHeader">
                  <SliceLogo />
                  {/* <h1 className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced mb-2 color-orange">
                   SLICE
                 </h1> */}
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
            </div>

            {/* <p class="title is-1 p-2">A SPACE FOR THOSE WHO REFLECT</p>
            <p class="subtitle is-4 p-2">
              The Masjid in the Park is a dedicated community space for worship
              and connection. Our vision is to provide a simple, peaceful place
              that allows worshippers to take a step away from their busy lives
              to spend some time in prayer, contemplation and reflection. Masjid
              in the Park is also an outreach mosque - we welcome visitors as
              guests of God.
            </p> */}

            {/* <button class="button is-medium btn-mitp">Learn More</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
