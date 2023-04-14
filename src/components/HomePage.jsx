/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import BasicMain from "./BasicMain";
import MyFooter from "./MyFooter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const HomePage = () => {
  // const params = useParams()
  const [albums, setAlbums] = useState([]);
  const fetchAlbums = async () => {
    // fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    //   .then((response) => response.json())
    //   .then((data) => setAlbums(data.artist)) // prendo solo i primi 3 album
    //   .catch((error) => console.log(error));
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/75621062"
      );
      if (response.ok) {
        const data = await response.json();
        setAlbums(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <MyNav />

          <Container className="mx-auto d-flex justify-content-center">
            <Row>
              {/* {albums &&
                albums.map((album) => ( */}
              <Col className="mx-auto" xs={12} key={albums.id}>
                <img src={albums.cover_medium} alt="" />
                <Link to={"/album" + albums.id}>
                  <p className="text-white">{albums.title}</p>
                </Link>
              </Col>
              {/* // ))} */}
            </Row>
          </Container>
          <BasicMain />
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default HomePage;
