import { Link } from "react-router-dom";
const PortfolioPageView = () => {
  return (
    <>
      <Link to={{ pathname: "installation" }}>Installation Art</Link>
      <Link to={{ pathname: "video" }}>Video Art</Link>
      <Link to={{ pathname: "documentary" }}>Documentary films</Link>
    </>
  );
};
export default PortfolioPageView;
