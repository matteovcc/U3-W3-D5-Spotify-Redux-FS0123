// import { Container, Row } from "react-bootstrap";
// import { MyNav } from "./MyNav.jsx";
// import BasicMain from "./BasicMain.jsx";
// import MyFooter from "./MyFooter.jsx";

// const handleArtist = async (artistName, domQuerySelector) => {
// try {
// const response = await fetch(`
// https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`,
// {
// method: 'GET',
// headers,
// }
// );
// if (response.ok) {
// const result = await response.json();
// const songInfo = result.data;
// const div = document.querySelector(domQuerySelector);
// div.innerHTML += <AlbumCard songInfo={songInfo[0]} />;
// } else {
// console.log('error');
// }
// } catch (err) {
// console.log(err);
// }
// };
// const AlbumPage = ({songInfo}) => {
//   return (
//     <>
//       <Container fluid>
//         <Row>
//           <MyNav />
//           <BasicMain />
//         </Row>
//       </Container>
//       <MyFooter />
//     </>
//   );
// };

// export default AlbumPage;

// const rockArtists = [
//   'queen',
//   'u2',
//   'thepolice',
//   'eagles',
//   'thedoors',
//   'oasis',
//   'thewho',
//   'bonjovi',
//   ];

//   const popArtists = [
//   'maroon5',
//   'coldplay',
//   'onerepublic',
//   'jamesblunt',
//   'katyperry',
//   'arianagrande',
//   ];

//   const hipHopArtists = [
//   'eminem',
//   'snoopdogg',
//   'lilwayne',
//   'drake',
//   'kanyewest',
//   ];

//   const headers = new Headers({
//   'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//   'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
//   });

//   const AlbumCard = ({ songInfo }) => {
//   return (
//     // <div className="col text-center" id={songInfo.id}>
//     // <a href={/album_page.html?id=${songInfo.album.id}}>
//     // <img
//     // className="img-fluid"
//     // src={songInfo.album.cover_medium}
//     // alt="1"
//     // />
//     // </a>
//     // <p>
//     // <a href={/album_page.html?id=${songInfo.album.id}}>
//     // Album: "
//     // {songInfo.album.title.length < 16
//     // ? ${songInfo.album.title}
//     // : ${songInfo.album.title.substring(0, 16)}...}
//     // "<br />
//     // </a>
//     // <a href={/artist_page.html?id=${songInfo.artist.id}}>
//     // Artist: {songInfo.artist.name}
//     // </a>
//     // </p>
//     // </div>
//     <Col className="text-center">

//     </Col>
//   );
//   }

// const Home = () => {
// useEffect(async () => {
// const rockRandomArtists = [],
// popRandomArtists = [],
// hipHopRandomArtists = [];

// document.querySelector('#searchField').value = '';

// while (rockRandomArtists.length < 4) {
//   const artist =
//     rockArtists[Math.floor(Math.random() * rockArtists.length)];
//   if (!rockRandomArtists.includes(artist)) {
//     rockRandomArtists.push(artist);
//   }
// }

// while (popRandomArtists.length < 4) {
//   const artist =
//     popArtists[Math.floor(Math.random() * popArtists.length)];
//   if (!popRandomArtists.includes(artist)) {
//     popRandomArtists.push(artist);
//   }
// }

// while (hipHopRandomArtists.length < 4) {
//   const artist =
//     hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
//   if (!hipHopRandomArtists.includes(artist)) {
//     hipHopRandomArtists.push(artist);
//   }
// }

// for (const artist of rockRandomArtists) {
//   await handleArtist(artist, '#rockSection');
// }

// for (const artist of popRandomArtists) {
//   await handleArtist(artist, '#popSection');
// }

// for (const artist of hipHopRandomArtists) {
//   await handleArtist(artist, '#hipHopSection');
// }
// }, []);

// return (
// <div>
// <div id="rockSection" className="row"></div>
// <div id="popSection" className="row"></div>
// <div id="hipHopSection" className="row"></div>
// </div>
// );
// };

// export { Home, Search };
