const ButtonsGroup = function () {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col d-none d-lg-flex col-lg-3"></div>
        <div className="col col-6 border-bottom border-secondary d-flex justify-content-between flex-wrap">
          <button
            style={{ color: "white", borderRadius: "0" }}
            type="button"
            className="btn btn-dark bg-white border-secondary text-dark mb-4 fs-3 px-4 fw-bold"
          >
            SAVE
          </button>
          <button
            style={{ color: "white", borderRadius: "0" }}
            type="button"
            className="btn btn-dark border border-secondary text-secondary mb-4 fs-3 px-4 fw-bold"
          >
            CANCEL
          </button>
          <button
            style={{ color: "white", borderRadius: "0" }}
            type="button"
            className="btn btn-dark border border-secondary text-secondary mb-4 fs-3 px-4 fw-bold"
          >
            DELETE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsGroup;
