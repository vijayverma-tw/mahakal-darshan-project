import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-section'>
      <h4 className='text-color'>ॐ त्र्यंबकं यजामहे सुगन्धिं पुष्टिवर्धनम् | उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्</h4>
      <div className='orange-header'>
        <ul className='p-0'>
          <li>
            <span>
              <FaPhoneAlt />
              0734-2550563</span>
          </li>
          <li>|</li>
          <li>
            <span><FaLocationDot />Shri Mahakaleshwar Temple Management Committee, Ujjain</span>
          </li>
        </ul>
      </div>
      <div className='footer_bottom'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='left-content'>
                <img src="images/logo-footer.svg" alt="" className='footer-logo'/>
                <p className='pt-3'>Mahakaleshwar Jyotirlinga is believed to free devotees from the fear of akaal mrityu. Lord Mahakal, the eternal protector, bestows blessings of longevity, strength, and liberation, ensuring peace and security in the devotee’s life.</p>
                <div className='social-icons'>
                  <span>Connect with us</span>
                  <a href='https://www.facebook.com/shreemahakaleshwarujjain/'><img src="icons/fb.svg" alt="" className='me-3' /></a>
                  <a href="https://www.instagram.com/shrimahakaleshwarjyotirlingam"><img src="icons/insta.svg" alt="" className='me-3' /></a>
                  <a href='href="https://x.com/ujjainmahakal?lang=en"'><img src="icons/x.svg" alt="" /></a>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='right-content'>
                <h5 className='pb-2'>Quick Links</h5>
                <Row className='g-4'>
                  <Col md={6}>
                    <div className='d-flex align-items-center gap-4'>
                      <span></span>
                      <a>About Temple</a>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='d-flex align-items-center gap-4'>
                      <span></span>
                      <a href='/privacy-policy'>Privacy Policy</a>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='d-flex align-items-center gap-4'>
                      <span></span>
                      <a href='/gallery'>Photo Gallery</a>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='d-flex align-items-center gap-4'>
                      <span></span>
                      <a href='/contact'>Contact Us</a>
                    </div>
                  </Col>
                </Row>
                <p>Created with ❤️️️ by Thoughtwin</p>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
      <div className='all-rights'>
        <p>© 2025 Shri Mahakaleshwar Temple Management Committee, Ujjain. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
