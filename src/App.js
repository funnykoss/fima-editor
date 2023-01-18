import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePageView from "./views/HomePageView/HomePageView";
import Layout from "./components/Layout";
import About from "./components/About";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageView />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
