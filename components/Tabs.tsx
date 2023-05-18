import { useState } from "react";
import CompProfile from "./CompProfile";

function Tabs() {
  const [tab, setTab] = useState("basicinfo");

  return (
    <div>
      <div className="tabs-container">
        <ul className="tabs">
          <li
            onClick={() => setTab("basicinfo")}
            className={`${tab === "basicinfo" ? "tabs-li-active" : ""} tabs-li`}
          >
            Basic Info
          </li>
          <li
            onClick={() => setTab("files")}
            className={`${tab === "files" ? "tabs-li-active" : ""} tabs-li`}
          >
            Files
          </li>
          <li
            onClick={() => setTab("mutualaction")}
            className={`${
              tab === "mutualaction" ? "tabs-li-active" : ""
            } tabs-li`}
          >
            Mutual Action Plan
          </li>
          <li
            onClick={() => setTab("contact")}
            className={`${tab === "contact" ? "tabs-li-active" : ""} tabs-li`}
          >
            Contact
          </li>
        </ul>
        <li
          onClick={() => setTab("internalaction")}
          className={`${
            tab === "internalaction" ? "tabs-li-active" : ""
          } tabs-li tabs-li-internal`}
        >
          Internal Actions
        </li>
      </div>

      {tab === "basicinfo" && <CompProfile />}
      {tab === "files" && <div></div>}
      {tab === "mutualaction" && <div></div>}
      {tab === "contact" && <div></div>}
      {tab === "internalaction" && <div></div>}
    </div>
  );
}

export default Tabs;
