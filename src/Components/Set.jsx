const Set = function () {
  return (
    <div className="bg-white container-fluid">
      <div className="row ">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-12 col-md-3 border-bottom border-secondary-subtle">
          <h2 className="text-secondary fs-4">SETTINGS</h2>
        </div>
        <div className="col border-bottom border-secondary-subtle d-flex flex-column">
          <a href="#" className="text-decoration-none mb-1">
            Parental control
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Test participation
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Manage download device
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Activate a device
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Recente device streaming activity
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Sign out of all devices
          </a>
        </div>
        <div className="col d-flex flex-column align-items-end border-bottom border-secondary-subtle"></div>
      </div>
    </div>
  );
};

export default Set;
