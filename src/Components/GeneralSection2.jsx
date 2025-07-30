import { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const GeneralSection2 = (props) => {
  {
    /*state = {
    movies: [],
    loading: true,
    error: false,
  };*/
  }

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=deadea8b&s=" + props.search)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        console.log(data);
        {
          /*this.setState({ movies: data.Search, loading: false });*/
        }
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((er) => {
        console.log("errore", er);
        {
          /*this.setState({ loading: false, error: true });*/
        }
        setLoading(false);
        setError(true);
      });
  };

  {
    /*componentDidMount() {
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
  }*/
  }

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.search]);

  return (
    <>
      <div className="mx-3">
        <h4 className="text-white">{props.text}</h4>
        <div className="container-fluid">
          {loading && (
            <div className="text-center ">
              <Spinner animation="border" variant="danger" />
            </div>
          )}

          {error && (
            <Alert variant="danger" className="text-center">
              Errore nel recupero dei dati
            </Alert>
          )}

          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 mb-4">
            {movies.map((movie) => {
              return (
                <div className="col mb-2 text-center px-1" key={movie.imdbID}>
                  <Link to={"/details/" + movie.imdbID}>
                    <img
                      style={{ height: "250px" }}
                      className="img-fluid"
                      src={movie.Poster}
                      alt="movie picture"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default GeneralSection2;
