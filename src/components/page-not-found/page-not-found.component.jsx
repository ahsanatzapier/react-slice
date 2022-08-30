import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="hero is-fullheight-with-navbar has-background">
        <img
          className="hero-background is-transparent"
          src="https://img.freepik.com/free-vector/pink-color-watercolor-background_125540-1216.jpg?w=2000&t=st=1661828887~exp=1661829487~hmac=1688ca81e39ecde771e5d32e8fcceb77fed79cba47fc7c6f9a14681c6de8524e"
        />
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered is-centered">
              <div className="column is-narrow has-text-centered">
                <header className="SectionHeader">
                  <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                    Not all who wander are lost...
                  </h1>
                  <h1 className="title is-3 is-size-3-mobile is-spaced mb-0">
                    but you might be.
                  </h1>
                </header>
                <Link to="/">
                  <div className="buttons is-inline-flex mt-5">
                    <button className="button is-link is-medium">
                      Go Home
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
