import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "./GlimpsesSlider.scss";
import { useLocation } from "react-router-dom";
const glimpses = [
  { image: "/images/glimpses/1.jpg" },
  { image: "/images/glimpses/2.jpg" },
  { image: "/images/glimpses/3.jpg" },
  { image: "/images/glimpses/3.jpg" },
];
const mahakallok = [
  { image: "/images/glimpses/5.jpg" },
  { image: "/images/glimpses/4.jpg" },
  { image: "/images/glimpses/6.jpg" },
  { image: "/images/glimpses/6.jpg" },
];
const GlimpsesSlider = () => {
  const { pathname } = useLocation();
  // ✅ choose images based on page
  const images =
    pathname === "/mahakal-lok" ? mahakallok : glimpses;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="glimpses-section">
      <Container>
        <Row>
          <Col>
            <Slider {...settings} className="glimpses-slider">
              {images.map((item, index) => (
                <div key={index} className="slide-wrapper">
                  <img src={item.image} alt="Mahakal" />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GlimpsesSlider;