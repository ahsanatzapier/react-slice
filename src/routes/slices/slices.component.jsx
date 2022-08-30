import { Link } from "react-router-dom";
import NoSlices from "../../components/no-slices/no-slices.component";

const Slices = () => {
  return (
    <div className="hero is-fullheight has-background">
      <img
        className="hero-background is-align-items-stretch is-transparent"
        src="https://img.freepik.com/free-photo/abstract-pink-red-background-christmas-valentines-layout-des_1258-262.jpg?w=2000&t=st=1661830385~exp=1661830985~hmac=b9f011888c8efa0f2cb34dc20a5b0f585f3a23d0116cd44bc7287cf3146b6a60"
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
