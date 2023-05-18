import Image from "next/image";
import download from "../assets/images/download.png";
import eye from "../assets/images/eye.png";
import deleteImg from "../assets/images/delete.png";
import moreImage from "../assets/images/more.png";
import pdf from "../assets/images/pdf.png";
import dowload from "../assets/images/download.png";
import zoomIn from "../assets/images/zoomin.png";
import zoomOut from "../assets/images/zoomout.png";
import open from "../assets/images/open.png";
import weWork from "../assets/images/wework-logo.png";
import chat from "../assets/images/chat.png";
import share from "../assets/images/share.png";

function CompProfile() {
  return (
    <div className="compProfile">
      <div className="compProfile-left">
        <h5>Overview</h5>
        <ul>
          <li>Welcome</li>
          <li>Product Capabilities</li>
          <li>Customer Success Stories</li>
          <li>File Sharing</li>
          <li>Our Deck</li>
        </ul>
      </div>
      <div className="compProfile-right">
        <div className="compProfile__container">
          <div className="compProfile__nav">
            <h2>Company Profile</h2>
            <div className="compProfile__nav-triggers">
              <Image src={download} alt="images" />
              <Image src={eye} alt="images" />
              <Image src={deleteImg} alt="images" />
            </div>
          </div>
          <Image
            className="compProfile__nav-more-image"
            src={moreImage}
            alt="expand more"
          />
        </div>
        <div className="compProfile__work">
          <div className="compProfile__work-cont">
            <div className="compProfile__work-cont-inner">
              <Image src={pdf} alt="pdf" />
              <span>1/15</span>
            </div>
            <div className="compProfile__work-cont-inner">
              <Image src={dowload} alt="dowload" />
            </div>
            <div className="compProfile__work-cont-inner">
              <Image src={zoomIn} alt="zoomIn" />
            </div>
            <div className="compProfile__work-cont-inner">
              <Image src={zoomOut} alt="zoomOut" />
            </div>
            <div className="compProfile__work-cont-inner">
              <Image src={open} alt="open" />
            </div>
          </div>
          <div className="compProfile__work-details">
            <Image src={weWork} alt="wework logo" />
            <h3>For all the ways you work, we are here</h3>
          </div>
        </div>
        <div className="compProfile__socialIcons">
          <div className="compProfile__socialIcons-chat-cont">
            <Image
              className="compProfile__socialIcons-chat"
              src={chat}
              alt="chat"
            />
            <span>8</span>
          </div>
          <Image
            className="compProfile__socialIcons-share"
            src={share}
            alt="share"
          />
        </div>
      </div>
    </div>
  );
}

export default CompProfile;
