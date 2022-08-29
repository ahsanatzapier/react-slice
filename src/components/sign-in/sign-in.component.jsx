import "./sign-in.styles.scss";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailandPassword,
} from "../../utils/firebase.utils";

const defaultFromFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFromFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailandPassword(
        email,
        password
      );
      // console.log(response);
      resetFormFields();
    } catch (error) {
      // console.log(error.message);
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Password is incorrect");
          break;
        case "auth/too-many-requests":
          alert(
            "Access to this account has been temporarily disabled due to many failed login attempts"
          );
          break;
        default:
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(userDocRef);
    setFormFields(defaultFromFields);
  };

  return (
    <section className="hero is-medium">
      <div className="hero-body has-text-centered">
        <div className="login">
          <h1 className="title has-text-weight-bold is-3 is-size-2-mobile is-spaced mb-2 color-orange mb-5">
            Sign In
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input is-medium is-rounded"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  name="email"
                  value={email}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input is-medium is-rounded"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  name="password"
                  value={password}
                />
              </div>
            </div>
            <br />
            <button
              className="button is-block is-fullwidth is-primary is-medium is-rounded mb-3"
              type="submit"
            >
              Sign In
            </button>
            <button
              onClick={signInWithGoogle}
              className="button is-block is-fullwidth is-info is-medium is-rounded"
              type="button"
            >
              Sign in with Google
            </button>

            <br />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
