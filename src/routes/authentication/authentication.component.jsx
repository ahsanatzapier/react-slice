import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Authentication = () => {
  return (
    <div class="columns">
      <div class="column">
        {" "}
        <SignIn />
      </div>

      <div class="column">
        {" "}
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
