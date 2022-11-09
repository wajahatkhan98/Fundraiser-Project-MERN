import { InvestNowImg } from "../components/Images";
import { LocationImg } from "../components/Images";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
function InvestCard({onClick}) {
  return (
    <>
      <Fade bottom>
        <div className="invest-now-card shop-item">
          <Link to={"#"}>
            <div className="image-section">
              <figure>
                <img src={InvestNowImg} />
                <figcaption>
                  <img src={LocationImg} className="location-icon" />
                  <span>People</span>
                </figcaption>
              </figure>
              {/* <button className='custom-btn secondary-btn'>View</button> */}
            </div>
            <h3 className="card-title "> Suc. #45 - Senderos</h3>
            <h4>HAS BEEN FUNDED 25% OF THE TOTAL INVESTMENT.</h4>

            <p>
              Invest in our new store that will be located in the municipality
              of Torreón.
            </p>
            <button className="btn primary-btn" onClick={onClick}>Invest Now</button>
          </Link>
        </div>
      </Fade>
    </>
  );
}
export default InvestCard;
