import Image from "next/image";
import progressBar from "../assets/images/progress.png";

function ScopeRecap() {
  return (
    <div className="scopRecap">
      <h2>Project Scope Recap</h2>
      <div className="scopRecap__progress">
        <div className="scopRecap__progress-text">
          <p>Mutual Action Plan</p>
          <p className="scopRecap__progress-text-percent">3%</p>
        </div>
        <Image src={progressBar} alt="progress image" />
      </div>
    </div>
  );
}

export default ScopeRecap;
