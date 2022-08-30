import NewSliceForm from "../../components/new-slice-form/new-slice-form.component";

const AddSlice = () => {
  return (
    <div className="hero is-fullheight-with-navbar has-background">
      <img
        className="hero-background is-align-items-stretch is-transparent"
        src="https://img.freepik.com/premium-photo/watercolor-soft-pink-abstract-background_3590-98.jpg?w=2000"
      />
      <div class="hero-body  is-align-items-stretch">
        <div class="container  is-flex">
          <div class="columns is-centered is-flex-grow-1">
            <div class="column">
              <NewSliceForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSlice;
