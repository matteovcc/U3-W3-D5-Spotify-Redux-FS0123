import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import MyNav from "./components/MyNav";
// import MyFooter from "./components/MyFooter";
// import AlbumPage from "./components/AlbumPage";
// import ArtistPage from "./components/ArtistPage";
import Search from "./components/Search";

function App() {
  return (
    // <BrowserRouter>
    //   <MyNav />
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/album/:album_id" element={<AlbumPage />} />
    //     <Route path="/artist" element={<ArtistPage />} />
    //   </Routes>
    //   <MyFooter />
    // </BrowserRouter>
    <Search></Search>
  );
}

export default App;
