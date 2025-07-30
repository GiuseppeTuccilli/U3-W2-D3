const MaturitySettings = function () {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col col-12 col-lg-7 border-bottom border-secondary d-flex flex-column align-items-start">
          <h3 className="text-white my-2">Maturity Settings</h3>
          <button
            style={{ color: "white", borderRadius: "0" }}
            type="button"
            className="btn btn-dark border border-secondary text-secondary fw-bold my-2"
          >
            ALL MATURITY RATINGS
          </button>
          <p className="text-white fs-5">
            Show titles of all maturity ratings for this profile
          </p>
          <button
            style={{ color: "white", borderRadius: "0" }}
            type="button"
            className="btn btn-dark border border-secondary text-secondary px-3 mb-4"
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaturitySettings;
