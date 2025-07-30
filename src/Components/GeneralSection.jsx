import { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Alert } from "react-bootstrap";

class GeneralSection extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=deadea8b&s=" + this.props.search)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ movies: data.Search, loading: false });
      })
      .catch((er) => {
        console.log("errore", er);
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    return (
      <>
        <div className="mx-3">
          <h4 className="text-white">{this.props.text}</h4>
          <div className="container-fluid">
            {this.state.loading && (
              <div className="text-center ">
                <Spinner animation="border" variant="danger" />
              </div>
            )}

            {this.state.error && (
              <Alert variant="danger" className="text-center">
                Errore nel recupero dei dati
              </Alert>
            )}

            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 mb-4">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col mb-2 text-center px-1" key={movie.imdbID}>
                    <img
                      style={{ height: "250px" }}
                      className="img-fluid"
                      src={movie.Poster}
                      alt="movie picture"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default GeneralSection;
