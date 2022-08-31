import "./sign-up.styles.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";

const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFromFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      // setCurrentUser(user);
      resetFormFields();
      navigate("/slices");

      // console.log(response);
    } catch (error) {
      // console.log(error.message);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already in use");
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters");
          break;
        default:
          break;
      }
    }
  };

  return (
    <section className="">
      <div className="has-text-centered">
        <div className="login">
          <h1 className="title has-text-weight-bold is-3 is-size-2-mobile is-spaced mb-2 color-orange mb-5">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input is-medium is-rounded"
                  type="text"
                  placeholder="Display Name"
                  required
                  onChange={handleChange}
                  name="displayName"
                  value={displayName}
                />
              </div>
            </div>

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
            <div className="field">
              <div className="control">
                <input
                  className="input is-medium is-rounded"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  onChange={handleChange}
                  name="confirmPassword"
                  value={confirmPassword}
                />
              </div>
            </div>
            <br />
            <button
              className="button is-block is-fullwidth is-primary is-medium is-rounded"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <br />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
