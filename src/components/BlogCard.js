import { Col, Row } from "react-bootstrap";
import { BlogOne, Unkown } from "./Images";
import { Fade } from "react-reveal";
function BlogCard(props) {
  return (
    <>
      <div className="blog-card">
        <Row>
          <Col lg={6}>
            <Fade left>
              <img src={BlogOne} className="blog-img" />
            </Fade>
          </Col>
          <Col lg={6}>
            <Fade right>
              <div className="blog-text-section">
                <div className="blog-creater">
                  <div className="inner">
                    <img src={Unkown} />
                    <div>
                      <span>
                        Edu Hdz <i class="fa-solid fa-crown"></i>
                      </span>
                      <br />
                      <span>12 hours ago</span>
                    </div>
                  </div>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="blog-body">
                  <h3>Write on your blog from your website or mobile</h3>
                  <p>
                    At Wix, we've made it easy and convenient to manage your
                    blog from anywhere. <br />
                    In this post we tell you how...
                  </p>
                  <hr />
                  <div className="blog-footer">
                    <div>
                      <span>1 view</span>
                      <span>0 comments</span>
                    </div>
                    <i class="fa-solid fa-heart"></i>
                  </div>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default BlogCard;
