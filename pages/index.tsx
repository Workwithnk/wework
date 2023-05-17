import Image from "next/image";
import weWork from "../assets/images/weWork.png";
import sals from "../assets/images/salsforce.png";
import plus from "../assets/images/plus.png";
import ScopeRecap from "../components/ScopeRecap";
import Tabs from "../components/Tabs";

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <h1 className="home__intro-title">
          <b>WeWork + Salesforce</b>
        </h1>
        <button className="home__intro-button">Publish/Share</button>
      </div>
      <div className=" home__intro-banner">
        <div className="home__intro-banner-container">
          <div className=" home__intro-banner-proposal">
            <h2>Workspace Proposal</h2>
          </div>
        </div>
        <div className=" home__intro-banner-foot ">
          <Image
            src={weWork}
            alt="banner footer logo"
            className="home__intro-banner-foot-logo"
          />
          <Image
            src={plus}
            alt="banner footer logo"
            className="home__intro-banner-foot-plus"
          />
          <Image
            src={sals}
            alt="banner footer logo"
            className="home__intro-banner-foot-logo"
          />
        </div>
      </div>
      <ScopeRecap />
      <Tabs />
    </div>
  );
};

export default Home;
