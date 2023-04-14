/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import BasicMain from "./BasicMain";
import MyFooter from "./MyFooter";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [albums, setAlbums] = useState([]);
  const fetchAlbums = () => {
    fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
      .then((response) => response.json())
      .then(({ data }) => setAlbums(data)) // prendo solo i primi 3 album
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <MyNav />
          <BasicMain />
          <Container>
            <Row>
              {albums.map((album) => (
                <Col xs={3} key={album.id}>
                  <img src={album.cover_medium} alt="" />
                  <p>{album.title}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default HomePage;
