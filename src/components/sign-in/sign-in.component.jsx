import "./sign-in.styles.scss";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <section class="hero is-medium">
      <div class="hero-body has-text-centered">
        <div class="login">
          <h1 className="title has-text-weight-bold is-3 is-size-2-mobile is-spaced mb-2 color-orange mb-5">
            Sign In
          </h1>

          <div class="field">
            <div class="control">
              <input
                class="input is-medium is-rounded"
                type="email"
                placeholder="Email"
                autocomplete="username"
                required
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input is-medium is-rounded"
                type="password"
                placeholder="Password"
                autocomplete="current-password"
                required
              />
            </div>
          </div>
          <br />
          <button
            class="button is-block is-fullwidth is-primary is-medium is-rounded mb-3"
            type="submit"
          >
            Login
          </button>
          <button
            onClick={logGoogleUser}
            class="button is-block is-fullwidth is-info is-medium is-rounded"
          >
            Sign in with Google
          </button>

          <br />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
