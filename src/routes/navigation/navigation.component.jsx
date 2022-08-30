import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SliceLogo } from "../../assets/slice.svg";
import { Fragment } from "react";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <nav className="navbar is-spaced has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item">
              <Link to="/">
                <SliceLogo />
              </Link>
            </span>

            <span
              className="navbar-burger burger"
              data-target="navbarMenu"
              onClick={() => {
                var burger = document.querySelector(".burger");
                var nav = document.querySelector("#navbarMenu");
                burger.classList.toggle("is-active");
                nav.classList.toggle("is-active");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              {/* <Link to="/">
                  <span
                    className="navbar-item is-size-5 has-text-weight-semibold has-text-black has-background-danger ml-1 mr-1"
                    onClick={() => {
                      var burger = document.querySelector(".burger");
                      var nav = document.querySelector("#navbarMenu");
                      burger.classList.remove("is-active");
                      nav.classList.remove("is-active");
                    }}
                  >
                    + Add a Slice
                  </span>
                </Link> */}

              {/* <Link to="/">
                  <span
                    className="navbar-item is-size-5 has-text-weight-semibold has-text-black has-background-info ml-1 mr-1"
                    onClick={() => {
                      var burger = document.querySelector(".burger");
                      var nav = document.querySelector("#navbarMenu");
                      burger.classList.remove("is-active");
                      nav.classList.remove("is-active");
                    }}
                  >
                    Slice Feed
                  </span>
                </Link> */}

              {currentUser && (
                <>
                  <div className="mr-2">
                    <Link to="/addslice">
                      <span
                        className="navbar-item is-size-5 has-text-weight-semibold has-text-black ml-1 mr-1"
                        onClick={() => {
                          var burger = document.querySelector(".burger");
                          var nav = document.querySelector("#navbarMenu");
                          burger.classList.remove("is-active");
                          nav.classList.remove("is-active");
                        }}
                      >
                        Add a Slice
                      </span>
                    </Link>
                  </div>
                  <div className="mr-2">
                    <Link to="/slices">
                      <span
                        className="navbar-item is-size-5 has-text-weight-semibold has-text-black ml-1 mr-1"
                        onClick={() => {
                          var burger = document.querySelector(".burger");
                          var nav = document.querySelector("#navbarMenu");
                          burger.classList.remove("is-active");
                          nav.classList.remove("is-active");
                        }}
                      >
                        My Slices
                      </span>
                    </Link>
                  </div>

                  <div>
                    <Link to="/">
                      <span
                        className="navbar-item is-size-5 has-text-weight-semibold has-text-black ml-1 mr-1"
                        onClick={() => {
                          signOutUser();
                          var burger = document.querySelector(".burger");
                          var nav = document.querySelector("#navbarMenu");
                          burger.classList.remove("is-active");
                          nav.classList.remove("is-active");
                        }}
                      >
                        Sign Out
                      </span>
                    </Link>
                  </div>
                </>
              )}

              {!currentUser && (
                <Link to="/auth">
                  <div
                    className="navbar-item is-size-5 has-text-weight-semibold has-text-black ml-1 mr-1"
                    onClick={() => {
                      var burger = document.querySelector(".burger");
                      var nav = document.querySelector("#navbarMenu");
                      burger.classList.remove("is-active");
                      nav.classList.remove("is-active");
                    }}
                  >
                    Sign In
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
