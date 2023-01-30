import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageView from "./views/HomePageView/HomePageView";
import Layout from "./components/Layout";
import About from "./components/About";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageView />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
