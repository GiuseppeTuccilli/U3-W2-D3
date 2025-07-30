const Plan = function () {
  return (
    <div className="container-fluid bg-white">
      <div className="row ">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-12 col-md-3 border-bottom border-secondary-subtle">
          <h2 className="text-secondary fs-4">PLAN DETAILS</h2>
        </div>
        <div className="col border-bottom border-secondary-subtle">
          <p className="text-black fw-bold mb-1">
            premium<i className="bi bi-badge-hd ms-1 fs-4"></i>
          </p>
        </div>
        <div className="col d-flex flex-column align-items-end border-bottom border-secondary-subtle">
          <a href="#" className="text-decoration-none mb-1">
            Change Plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plan;
