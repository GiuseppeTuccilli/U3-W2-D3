const Prof = function () {
  return (
    <div className="container-fluid bg-white">
      <div className="row mb-3">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-12 col-md-3">
          <h2 className="text-secondary fs-4">MY PROFILE</h2>
        </div>
        <div className="col d-flex">
          <img
            alt="avatar"
            src="../U2-W2-D5/Netflix-assets/assets/avatar.png"
            className="rounded-circle"
            style={{ width: "50px", marginTop: " 0.5em" }}
          />
          <p className="text-black fw-bold mb-1 ms-2 pt-2">
            student@strive.school
          </p>
        </div>
        <div className="col d-flex flex-column align-items-end">
          <a href="#" className="text-decoration-none mb-1">
            Manage prfofiles
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Add profile email
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-12 col-md-3"></div>
        <div className="col border-bottom border-secondary-subtle d-flex flex-column">
          <a href="#" className="text-decoration-none mb-1">
            Language
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Payback settings
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Subtitle appearance
          </a>
        </div>
        <div className="col d-flex flex-column align-items-start border-bottom border-secondary-subtle">
          <a href="#" className="text-decoration-none mb-1">
            View activity
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Ratings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prof;
