import NewSliceForm from "../../components/new-slice-form/new-slice-form.component";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const AddSlice = () => {
  const { userLoaded } = useContext(UserContext);
  return (
    <Fragment>
      {!userLoaded && <div></div>}
      {userLoaded && (
        <div className="hero is-fullheight-with-navbar has-background">
          <img
            className="hero-background is-align-items-stretch is-transparent"
            src="https://img.freepik.com/premium-photo/watercolor-soft-pink-abstract-background_3590-98.jpg?w=2000"
          />
          <div className="hero-body  is-align-items-stretch">
            <div className="container  is-flex">
              <div className="columns is-centered is-flex-grow-1">
                <div className="column">
                  <NewSliceForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddSlice;
