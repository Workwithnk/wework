import Image from "next/image";
import logo from "../assets/images/logo.png";
import rightArrow from "../assets/images/right-arrow.png";
import hamburger from "../assets/images/hamberger.png";
import closeIcon from "../assets/images/close.png";
import user from "../assets/images/lady.png";
import searchIcon from "../assets/images/search.png";
import mailIcon from "../assets/images/mail.png";
import notificationIcon from "../assets/images/notification.png";
import helpIcon from "../assets/images/questions.png";
import Link from "next/link";
import { useState } from "react";

const menuNavLink = [
  {
    id: 0,
    linkName: "Search",
    logoUrl: searchIcon,
  },
  {
    id: 1,
    linkName: "Inbox",
    logoUrl: mailIcon,
  },
  {
    id: 2,
    linkName: "Notifications",
    logoUrl: notificationIcon,
  },
  {
    id: 3,
    linkName: "Help",
    logoUrl: helpIcon,
  },
];

const Navbar = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__logo-container">
        <div className="nav__logo-container-image-container">
          <Link href="/">
            <Image
              className="nav__logo-container-image-container-logo"
              src={logo}
              alt="we work logo"
            />
            <Image
              className="nav__logo-container-image-container-rightArrow"
              src={rightArrow}
              alt="right arrow"
            />
          </Link>
        </div>
        <Image
          className="nav__logo-container-hamburger"
          src={hamburger}
          alt="hamburger menu image"
          onClick={() => setMenuOpened(!isMenuOpened)}
        />
      </div>

      {isMenuOpened && (
        <div className="nav__menu">
          <Image
            className="nav__menu-close"
            src={closeIcon}
            alt="close icon"
            onClick={() => setMenuOpened(!isMenuOpened)}
          />
          <ul className="nav__menu-list">
            <li className="nav__menu-list-item">
              <Image src={user} alt="user logo" />
              <div className="nav__menu-list-item-userDetails">
                <h5>Jane Smith</h5>
                <p>Sales Executive</p>
              </div>
            </li>
            {menuNavLink.map((linksData) => {
              return (
                <li className="nav__menu-list-item">
                  <Image
                    src={linksData.logoUrl}
                    alt={`${linksData.linkName} icon`}
                  />
                  <div className="nav__menu-list-item-userDetails">
                    <p>{linksData.linkName}</p>
                  </div>
                </li>
              );
            })}
            {/* <li className="nav__menu-list-item">
            <Image src={searchIcon} alt="search icon" />
            <div className="nav__menu-list-item-userDetails">
              <p>Search</p>
            </div>
          </li>
          <li className="nav__menu-list-item">
            <Image src={mailIcon} alt="mail icon" />
            <div className="nav__menu-list-item-userDetails">
              <p>Inbox</p>
            </div>
          </li>
          <li className="nav__menu-list-item">
            <Image src={notificationIcon} alt="search icon" />
            <div className="nav__menu-list-item-userDetails">
              <p>Notifications</p>
            </div>
          </li>
          <li className="nav__menu-list-item">
            <Image src={helpIcon} alt="search icon" />
            <div className="nav__menu-list-item-userDetails">
              <p>Help</p>
            </div>
          </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
