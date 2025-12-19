import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <section className="contact-banner"></section>
      <section className="py-5 time-banner contact-head">
        <Container>
          <div className="text-center">
            <div>
              <span className="line-left"></span>{" "}
              <h1 className="text-uppercase">Contact us</h1>{" "}
              <span className="line-right"></span>
            </div>
          </div>
        </Container>
      </section>
      <section className="contact-detail">
        <Container>
          <Row>
            <Col md={{ span: 3, offset: 1 }} xs={12}>
              <h2>Reach Us Anytime</h2>
            </Col>
            <Col className="md-9 xs-12">
              <div className="contact-info mb-4">
                <div className="d-flex align-items-center gap-4">
                  <img src="icons/mail.svg" alt="" />
                  <div>
                    <h4 className="mb-0">Email </h4>
                    <a
                      href="mailto:office@mahakaleshwar.nic.in"
                      className="link"
                    >
                      office@mahakaleshwar.nic.in
                    </a>
                    <p>
                      Got a question? Drop us a line — we usually reply within
                      24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-info mb-4">
                <div className="d-flex align-items-center gap-4">
                  <img src="icons/call.svg" alt="" />
                  <div>
                    <h4 className="mb-0">Call or WhatsApp </h4>
                    <a href="tel:07342550563" className="link">
                      0734-2550563
                    </a>
                    <p>Prefer to talk it out? We’re just a ring away.</p>
                  </div>
                </div>
              </div>

              <div className="contact-info mb-4">
                <div className="d-flex align-items-center gap-4">
                  <img src="icons/map.svg" alt="" />
                  <div>
                    <h4 className="mb-0">Office Address </h4>
                    <p>
                      Shri Mahakaleshwar Temple Management Committee, Ujjain
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-form py-5">
        <Container>
          <h2 className="text-center mb-4">Get in Touch</h2>
          <Row>
            <Col lg={{ span: 6, offset: 3 }} md={12} sm={12} xs={12}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Full Name *" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email Address *" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="number" placeholder="Mobile Number *" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Write Your Message *"
                  />
                </Form.Group>
                <Button type="submit" className="btn-submit w-100 my-2">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
