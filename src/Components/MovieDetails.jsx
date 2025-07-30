import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
const MovieDetails = () => {
  const [title, setTitle] = useState("");
  const [genere, setGenere] = useState("");
  const [runTime, setRunTime] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();
  console.log(params);

  const navigate = useNavigate();

  const getDetails = () => {
    fetch("http://www.omdbapi.com/?apikey=f3b04225&i=" + params.movId)
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("errore nel recuper dettagli");
        }
      })
      .then((data) => {
        console.log(data);
        setTitle(data.Title);
        setGenere(data.Genre);
        setRunTime(data.Runtime);
        setCountry(data.Country);
        setImg(data.Poster);
      })

      .catch((er) => {
        console.log("errore", er);
      });
  };

  const getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + params.movId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODg3NmY3YzEyODg5NzAwMTVmMjdiYjQiLCJpYXQiOjE3NTM3MDYzNjQsImV4cCI6MTc1NDkxNTk2NH0.AJby4d7U0ZUy3us7IPO0p-mCmH3z-MNARBpvTftO51k",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((comData) => {
        console.log(comData);
        setComments(comData);
      })
      .catch((er) => {
        console.log(er);
        alert("errore nel recupero commenti");
      });
  };

  useEffect(() => {
    getDetails();
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Genere: {genere} <br />
                Durata: {runTime} <br />
                Paese: {country}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
            </Card.Body>
          </Card>
          <ListGroup>
            {comments.map((comment) => {
              return (
                <ListGroup.Item key={comment._id}>
                  {comment.comment}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
