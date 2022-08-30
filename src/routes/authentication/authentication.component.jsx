import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Authentication = () => {
  return (
    <div class="hero is-halfheight has-background">
      <img
        class="hero-background is-transparent"
        src="https://img.freepik.com/free-vector/elegant-pink-watercolor-texture-background_1017-19540.jpg?w=1480&t=st=1661828938~exp=1661829538~hmac=ba2bf805b390c2b2ed62ae4565cef5d9a1c4e8711166962832f6168952458cdd"
      />
      <div class="hero-body">
        <div class="container has-text-centered">
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
        </div>
      </div>
    </div>
  );
};

export default Authentication;
