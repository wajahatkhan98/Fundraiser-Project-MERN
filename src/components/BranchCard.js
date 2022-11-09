import { JavaTimes, BranchFooter } from "./Images";
import { Fade } from "react-reveal";
function BranchCard(props) {
  return (
    <>
      <Fade top cascade>
        <div className="branch-card">
          <img src={JavaTimes} />
          <h3 className="mt-2 primary-text">{props.title}</h3>
          <p>{props.address}</p>
          <img src={BranchFooter} />
        </div>
      </Fade>
    </>
  );
}

export default BranchCard;
