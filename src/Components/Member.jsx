const Member = function () {
  return (
    <div className="container-fluid bg-white">
      <div className="row">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-lg-7 border-bottom border-secondary-subtle mb-4">
          <h1>Account</h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-12 col-md-3">
          <h2 className="text-secondary fs-4">MEMBESHIP & BILLING</h2>
          <button
            type="button"
            className="btn btn-secondary border border-secondary text-dark px-4"
          >
            Cancel Membership
          </button>
        </div>
        <div className="col border-bottom border-secondary-subtle">
          <p className="text-black fw-bold mb-1">student@strive.school</p>
          <p className="text-secondary mb-1">Password:******</p>
          <p className="text-secondary">Phone: 333 3333333</p>
        </div>
        <div className="col d-flex flex-column align-items-end border-bottom border-secondary-subtle">
          <a href="#" className="text-decoration-none mb-1">
            Change Account email
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Change your password
          </a>
          <a href="#" className="text-decoration-none mb-1">
            Change phone number
          </a>
        </div>
      </div>
      <div className="row my-3">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-12 col-md-3"></div>
        <div className="col border-bottom border-secondary-subtle">
          <p className="text-black fw-bold mb-1">
            <i className="bi bi-paypal"></i>Paypal admin@strive.school
          </p>
        </div>
        <div className="col d-flex flex-column align-items-end border-bottom border-secondary-subtle">
          <a href="#" className="text-decoration-none mb-1">
            Update payment info
          </a>
          <a href="#" className="text-decoration-none mb-3">
            Billing detalis
          </a>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col d-none d-lg-flex col-2"></div>
        <div className="col col-12 col-md-3 border-bottom border-secondary-subtle"></div>
        <div className="col border-bottom border-secondary-subtle"></div>
        <div className="col d-flex flex-column align-items-end border-bottom border-secondary-subtle">
          <a href="#" className="text-decoration-none mb-1">
            Redeem gift card or promo code
          </a>
          <a href="#" className="text-decoration-none mb-3">
            Where to buy gift cards
          </a>
        </div>
      </div>
    </div>
  );
};

export default Member;
