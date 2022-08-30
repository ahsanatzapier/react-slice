import { Link } from "react-router-dom";
import NoSlices from "../../components/no-slices/no-slices.component";

const Slices = () => {
  return (
    <div className="hero is-fullheight-with-navbar has-background">
      <img
        className="hero-background is-align-items-stretch is-transparent"
        src="https://img.freepik.com/free-photo/pastel-pink-oil-paint-textured-background_53876-108408.jpg?w=2000&t=st=1661834847~exp=1661835447~hmac=8832ddc3409f0ccae4f35a07b68a47e390bcc7bfc48d6467afeb5acf4887ff79"
      />
      <div class="hero-body  is-align-items-stretch">
        <div class="container  is-flex">
          <div class="columns is-centered  is-flex-grow-1">
            <div class="column">
              <NoSlices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slices;
