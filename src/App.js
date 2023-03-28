import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageView from "./views/HomePageView/HomePageView";
import Layout from "./components/Layout";
import AboutPageView from "./views/AboutPageView";
import PortfolioPageView from "./views/PortfolioPageView";
import ContactsPageView from "./views/ContactsPageView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageView />} />
          <Route path="about" element={<AboutPageView />} />
          <Route path="gallery" element={<PortfolioPageView />} />
          <Route path="contacts" element={<ContactsPageView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
