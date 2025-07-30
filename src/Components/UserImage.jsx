const UserImage = function () {
  return (
    <div className="row g-3 my-2">
      <div className="col d-none d-lg-flex col-lg-3"></div>
      <div className="col col-6 col-lg-2">
        <img
          alt="avatar"
          src="../U2-W2-D5/Netflix-assets/assets/avatar.png"
          className="w-100 mb-4"
        />
      </div>
      <div className="col col-6 col-lg-4 border-bottom border-secondary d-flex flex-column">
        <button
          style={{ color: "white", borderRadius: "0" }}
          type="button"
          className="btn btn-dark border border-secondary text-white px-3 w-100 text-start mb-5 fw-bold text-center "
        >
          Strive Student
        </button>
        <h3 className="text-white">Language</h3>
        <div className="dropdown flex-grow-1">
          <button
            style={{ color: "white", borderRadius: "0" }}
            className="btn dropdown-toggle btn-superdark border border-white"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            English
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserImage;
