import { Col, Container, Row } from "react-bootstrap";
import "./Trustees.scss";

const Trustees = () => {
  return (
    <>
      <section className="trustees-banner"></section>
      <section className="pt-5 time-banner">
        <Container>
          <div className="text-center">
            <div>
              <span className="line-left"></span>{" "}
              <p className="text-uppercase">List Of</p>{" "}
              <span className="line-right"></span>
            </div>
            <h1 className="mt-3">SMTMC Members</h1>
          </div>
        </Container>
      </section>
      <section className="pt-4">
        <Container>
          <Row>
            <Col md={4} xs={12} className="mb-4">
              <div className="trustees-card">
                <div className="trustee-img">
                  <img src="images/trustees/1.png" alt="" />
                </div>
                <h3 className="my-3">Collector, Ujjain District</h3>
                <div className="trustee-detail mb-2">
                  <p>Position - President</p>
                  <span>
                    Phone Number -{" "}
                    <span className="d-block"> 0734-2514000</span>
                  </span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mb-4">
              <div className="trustees-card">
                <div className="trustee-img">
                  <img src="images/trustees/1.png" alt="" />
                </div>
                <h3 className="my-3">Police Superintendent, Ujjain District</h3>
                <div className="trustee-detail mb-2">
                  <p>Position - Nominated Member</p>
                  <span>
                    Phone Number -{" "}
                    <span className="d-block"> 0734-2556955</span>
                  </span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mb-4">
              <div className="trustees-card">
                <div className="trustee-img">
                  <img src="images/trustees/1.png" alt="" />
                </div>
                <h3 className="my-3">Mayor, Ujjain Municipal Corporation, Ujjain</h3>
                <div className="trustee-detail mb-2">
                  <p>Position - Member</p>
                  <span>
                    Phone Number -{" "}
                    <span className="d-block"> 0734-2551541</span>
                  </span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mb-4">
              <div className="trustees-card">
                <div className="trustee-img">
                  <img src="images/trustees/1.png" alt="" />
                </div>
                <h3 className="my-3">
                  Administrator, Shri Mahakaleshwar Temple, Ujjain
                </h3>
                <div className="trustee-detail mb-2">
                  <p>Position - Secretary</p>
                  <span>
                    Phone Number -{" "}
                    <span className="d-block"> 0734-2559277</span>
                  </span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mb-4">
              <div className="trustees-card">
                <div className="trustee-img">
                  <img src="images/trustees/1.png" alt="" />
                </div>
                <h3 className="my-3">
                  Additional District Magistrate, District, Ujjain
                </h3>
                <div className="trustee-detail mb-2">
                  <p>Position - Nominated Member</p>
                  <span>
                    Phone Number -{" "}
                    <span className="d-block"> 0734-2524448</span>
                  </span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mb-4">
              <div className="trustees-card">
                <div className="trustee-img">
                  <img src="images/trustees/1.png" alt="" />
                </div>
                <h3 className="my-3">
                  Mahant Panchaayati Mahamandaleshwar Akhada Shri Mahakaleshwar
                  Temple Parishad, Ujjain
                </h3>
                <div className="trustee-detail mb-2">
                  <p>Position - Ex-officio Member</p>
                  <span>
                    Phone Number -{" "}
                    <span className="d-block"> 0734-2855451</span>
                  </span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12} className="mb-4">
              <div className="trustees-card">
                <div className="trustee-img">
                  <img src="images/trustees/1.png" alt="" />
                </div>
                <h3 className="my-3">
                  Principal, Shaskiya Sanskrit Mahavidyalaya, Ujjain
                </h3>
                <div className="trustee-detail mb-2">
                  <p>Position - Member</p>
                  <span>
                    Phone Number -{" "}
                    <span className="d-block"> 0734-2559277</span>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Trustees;
