const AutoPlay = function () {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col col-12 col-lg-7 border-bottom border-secondary d-flex flex-column align-items-start">
          <h3 className="text-white my-2">Autoplay Controls</h3>
          <div className="form-check d-flex align-items-center">
            <input
              style={{
                height: "24px",
                width: "24px",
                borderRadius: "0",
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkChecked"
            />
            <label
              id="lab1"
              className="form-check-label text-white ms-2"
              htmlFor="checkChecked"
            >
              Autoplay next episode in a series on all devices
            </label>
          </div>
          <div className="form-check d-flex align-items-center mb-4">
            <input
              style={{
                height: "24px",
                width: "24px",
                borderRadius: "0",
                backgroundColor: "transparent",
                border: "2px solid white",
              }}
              className="form-check-input"
              type="checkbox"
              value=""
              id="checkChecked2"
            />
            <label
              id="lab2"
              className="form-check-label text-white ms-2"
              htmlFor="checkChecked"
            >
              Autoplay next episode in a series on all devices
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPlay;
