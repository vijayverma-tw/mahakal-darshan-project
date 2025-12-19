import { Col, Container, Row } from "react-bootstrap";
import "./TempleTimings.scss";
import GlimpsesSlider from "../../components/common/GlimpsesSlider/GlimpsesSlider";
const TempleTimings = () => {
  return (
    <>
      <section className="templetime-banner"></section>
      <section className="pt-5 time-banner">
        <Container>
          <div className="text-center">
            <div>
              <span className="line-left"></span>{" "}
              <p className="text-uppercase">Temple Timings</p>{" "}
              <span className="line-right"></span>
            </div>
            <h1 className="mt-3">Aarti & Darshan</h1>
          </div>
        </Container>
      </section>
      <section className="pt-4">
        <Container>
          <Row>
            <Col md={4} xs={12}>
              <div className="time-card">
                <div className="time-img">
                  <img src="images/timing/1.png" alt="" />
                </div>
                <h3 className="text-center my-3">Bhasma Aarti</h3>
                <div className="time-detail mb-2">
                  <p>Schedule of Aarti Timings from Chaitra Krishna Pratipada to Ashwin Purnima</p>
                  <span>4:00 AM to 6:00 AM</span>
                </div>
                <div className="time-detail">
                  <p>Schedule of Aarti Timings from Kartik Krishna Pratipada to Phalgun Purnima</p>
                  <span>4:00 AM to 6:00 AM</span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="time-card">
                <div className="time-img">
                  <img src="images/timing/1.png" alt="" />
                </div>
                <h3 className="text-center my-3">Dadhodan Aarti</h3>
                <div className="time-detail mb-2">
                  <p>Schedule of Aarti Timings from Chaitra Krishna Pratipada to Ashwin Purnima</p>
                  <span>7:00 AM to 7:45 AM</span>
                </div>
                <div className="time-detail">
                  <p>Schedule of Aarti Timings from Kartik Krishna Pratipada to Phalgun Purnima</p>
                  <span>7:30 AM to 8:15 AM</span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="time-card">
                <div className="time-img">
                  <img src="images/timing/1.png" alt="" />
                </div>
                <h3 className="text-center my-3">Bhog Aarti</h3>
                <div className="time-detail mb-2">
                  <p>Schedule of Aarti Timings from Chaitra Krishna Pratipada to Ashwin Purnima</p>
                  <span>10:00 AM to 10:45 AM</span>
                </div>
                <div className="time-detail">
                  <p>Schedule of Aarti Timings from Kartik Krishna Pratipada to Phalgun Purnima</p>
                  <span>10:30 AM to 11:15 AM</span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="time-card">
                <div className="time-img">
                  <img src="images/timing/1.png" alt="" />
                </div>
                <h3 className="text-center my-3">Sandhya Aarti</h3>
                <div className="time-detail mb-2">
                  <p>Schedule of Aarti Timings from Chaitra Krishna Pratipada to Ashwin Purnima</p>
                  <span>7:00 PM to 7:45 PM</span>
                </div>
                <div className="time-detail">
                  <p>Schedule of Aarti Timings from Kartik Krishna Pratipada to Phalgun Purnima</p>
                  <span>6:30 PM to 7:15 PM</span>
                </div>
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div className="time-card">
                <div className="time-img">
                  <img src="images/timing/5.png" alt="" />
                </div>
                <h3 className="text-center my-3">Shayan Aarti</h3>
                <div className="time-detail mb-2">
                  <p>Schedule of Aarti Timings from Chaitra Krishna Pratipada to Ashwin Purnima</p>
                  <span>10:30 PM to 11:00 PM</span>
                </div>
                <div className="time-detail">
                  <p>Schedule of Aarti Timings from Kartik Krishna Pratipada to Phalgun Purnima</p>
                  <span>10:30 PM to 11:00 PM</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5 time-banner Glimpses-div">
        <Container>
          <div className="text-center">
            <div>
              <span className="line-left"></span>
              <p className="text-uppercase">Glimpses of</p>
              <span className="line-right"></span>
            </div>
            <h1 className="mt-3">Mahakaleshwar Temple</h1>
          </div>
          <GlimpsesSlider/>
        </Container>
      </section>
    </>
  );
};

export default TempleTimings;
