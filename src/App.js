import { Route, Routes } from "react-router-dom";
import HomePageView from "./views/HomePageView/HomePageView";
import Layout from "./components/Layout";
import AboutPageView from "./views/AboutPageView";
import PortfolioPageView from "./views/PortfolioPageView";
import ContactsPageView from "./views/ContactsPageView";
import InstallationArtPageView from "./views/InstallationArtPageView";
import VideoArtPageView from "./views/VideoArtPageView";
import DocumentaryPageView from "./views/DocumentaryPageView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageView />} />
          <Route path="about" element={<AboutPageView />} />
          <Route path="gallery" element={<PortfolioPageView />} />
          <Route
            path="gallery/installation"
            element={<InstallationArtPageView />}
          />
          <Route path="gallery/video" element={<VideoArtPageView />} />
          <Route path="gallery/documentary" element={<DocumentaryPageView />} />
          <Route path="contacts" element={<ContactsPageView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
