import { useEffect, useState } from "react";
import MyFooter from "./MyFooter";
import MyNav from "./MyNav";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const AlbumPage = () => {
  const params = useParams();
  const [albums, setAlbums] = useState([]);
  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" +
          params.album_id +
          "/"
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MyNav />
      <Container className="d-flex justify-content-center">
        <Row>
          <Col xs={2}>
            <img src={albums.cover_medium} alt="" />
          </Col>
          <Col xs={6}>
            <p>{albums.title}</p>
            <p>{albums.artist}</p>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default AlbumPage;
