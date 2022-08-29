import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Authentication = () => {
  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-narrow">
        {" "}
        <SignIn />
      </div>

      <div className="column is-narrow">
        {" "}
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
