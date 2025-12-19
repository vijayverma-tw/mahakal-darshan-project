import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Home.scss";
import { AiOutlineFire } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineExport } from "react-icons/ai";
import { useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


const temples = [
  {
    title: "Nagchandreshwar Temple",
    tag: "Opens Once a Year",
    image: "/images/home/nagchandreshwar.svg",
    desc:
      "A unique temple situated on the third floor of Mahakaleshwar, which opens only once a year on Nag Panchami, dedicated to Lord Shiva seated with Goddess...",
    location: "Ujjain, MP",
  },
  {
    title: "Kalabhairav Temple",
    tag: "Unique Tradition",
    image: "/images/home/Kalabhairav.svg",
    desc:
      "Dedicated to Kalbhairav, a fierce form of Lord Shiva. Known for its unique tradition where devotees offer liquor as prasad to the deity.",
    location: "Ujjain, MP",
  },
  {
    title: "Chintaman Ganesh",
    tag: "Remover of Worries",
    image: "/images/home/Ganesh.svg",
    desc:
      "The Chintaman Ganesh Temple in Ujjain is an ancient shrine where Lord Ganesha, worshipped as the remover of worries (Chintaman), blesses devotees with peace and...",
    location: "Ujjain, MP",
  },
  {
    title: "Kalabhairav Temple",
    tag: "Unique Tradition",
    image: "/images/home/Kalabhairav.svg",
    desc:
      "Dedicated to Kalbhairav, a fierce form of Lord Shiva. Known for its unique tradition where devotees offer liquor as prasad to the deity.",
    location: "Ujjain, MP",
  },
];
const Home = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };
  const sliderRef = useRef(null);
  return (
    <>
      {/* banner */}
      <section className="Hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <img src="images/home/mahakal.svg" alt="" className="mahakal-img" />
            </Col>
            <Col md={7}>
              <div className="Heading_div">
                <div className="span-sacred mb-4">
                  <span className="">
                    <AiOutlineFire />
                    One of the 12 Sacred Jyotirlingas</span>
                </div>
                <h1>Shri Mahakaleshwar <br />Jyotirlinga</h1>
                <p>Experience the divine presence of Lord Shiva at the ancient and sacred temple of Ujjain, where spiritual energy flows through centuries of devotion.</p>
                <div className="location-span mt-4">
                  <span>
                    <img src="icons/map-pin.svg" alt="" className="me-2" />
                    Ujjain, Madhya Pradesh, India</span>
                </div>
                <div className="hero-button">
                  <Button className="book-aartibtn btn-bgcolor">
                    <AiOutlineFire className="me-2" />
                    Book Bhasma Aarti
                  </Button>
                  <Button className="ms-4 book-darshanbtn text-color outline-darshanbtn">
                    <img src="icons/Calendar.svg" alt="" className="me-2" />
                    Book Darshan Pass
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </section>

      {/* temple-stats */}
      <section className="temple-stats">
        <Container>
          <Row className="text-center justify-content-center">
            <Col md={2}>
              <div className="stat-item">
                <h3 className="text-color">50,000+</h3>
                <p className="m-0">Daily Visitors</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="stat-item">
                <h3 className="text-color">1000+</h3>
                <p className="m-0">Years of History</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="stat-item">
                <h3 className="text-color">5</h3>
                <p className="m-0">Daily Aartis</p>
              </div>
            </Col>
            <Col md={2}>
              <div className="stat-item">
                <h3 className="text-color">12+</h3>
                <p className="m-0">Temples in Complex</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Mahakaleshwar */}
      <section className="about-mahakaleshwar about-bg">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center Top-heading">
                <span className="text-color">Discover</span>
                <h2 className="pt-4 pb-3 m-0">About Mahakaleshwar</h2>
                <p className="m-0">One of the most sacred pilgrimage sites in India, steeped in mythology and<br /> divine significance.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="about-lefttext">
                <p className="text-black">
                  <b>Shri Mahakaleshwar Temple, located in the ancient city of Ujjain, Madhya Pradesh, is one of the twelve sacred <span className="text-color">Jyotirlingas</span> dedicated to Lord Shiva. The temple holds immense religious significance and is a major pilgrimage site for devotees worldwide.</b>
                </p>
                <p>
                  The temple's unique feature is its <span className="text-color">south-facing lingam</span> , symbolizing Lord Shiva's role as the destroyer of evil. This is the only Jyotirlinga that is Dakshinamurti, meaning it faces south – a direction associated with Yama, the God of Death, over whom Lord Mahakal has dominion.
                </p>
                <p>
                  The temple complex includes several smaller shrines and is known for its grand celebrations during festivals such as Maha Shivaratri. The temple's architecture reflects ancient Indian styles, attracting millions of visitors annually.
                </p>
                <Button className="outline-darshanbtn text-color">Explore Temple History <AiOutlineExport className="" />
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <div className="about-cards">
                    <img src="/icons/one.svg" alt="" />
                    <span className="text-color d-block mb-2 mt-3">4:00 AM DAILY</span>
                    <h4 >Bhasma Aarti</h4>
                    <p className="m-0">The most sacred ritual performed at 4 AM with sacred ash (bhasma) adorning the Shivalinga.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-cards">
                    <img src="/icons/two.svg" alt="" />
                    <span className="text-color d-block mb-2 mt-3">Daily Rituals</span>
                    <h4 >Bhasma Aarti</h4>
                    <p className="m-0">Five aartis performed daily, each carrying unique spiritual significance and energy.</p>
                  </div>
                </Col>
                <Col md={6} className="mt-4">
                  <div className="about-cards">
                    <img src="/icons/three.svg" alt="" />
                    <span className="text-color d-block mb-2 mt-3">Since 6th Century</span>
                    <h4 >Ancient Heritage</h4>
                    <p className="m-0">The most sacred ritual performed at 4 AM with sacred ash (bhasma) adorning the Shivalinga.</p>
                  </div>
                </Col>
                <Col md={6} className="mt-4">
                  <div className="about-cards">
                    <img src="/icons/four.svg" alt="" />
                    <span className="text-color d-block mb-2 mt-3">1 of 12</span>
                    <h4 >Unique Jyotirlinga</h4>
                    <p className="m-0">The most sacred ritual performed at 4 AM with sacred ash (bhasma) adorning the Shivalinga.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Temple Heritage slider*/}
      <section className="about-mahakaleshwar temple-heritage position-relative">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center Top-heading">
                <span className="text-color">Temple Heritage</span>
                <h2 className="pt-4 pb-3 m-0">Major Temples in Ujjain</h2>
                <p className="m-0">Discover the divine abodes surrounding Mahakaleshwar, each with unique<br /> spiritual significance.</p>
              </div>
            </Col>
            <Col md={12} className="position-relative">
              <div className="slider-header">
                <div className="slider-arrows">
                  <button onClick={() => sliderRef.current.slickPrev()}>
                    <MdOutlineKeyboardArrowLeft />
                  </button>
                  <button onClick={() => sliderRef.current.slickNext()}>
                     <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
              <Slider ref={sliderRef} {...settings} className="temple-slider">
                {temples.map((item, index) => (
                  <div key={index} className="pe-2">
                    <Card className="temple-card">
                      <div className="image-wrapper">
                        <img src={item.image} alt={item.title} />
                        <span className="tag">{item.tag}</span>
                      </div>

                      <Card.Body>
                        <div className="p-3">
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.desc}</Card.Text>
                        </div>

                        <div className="card-footer">
                          <span className="location">
                            <IoLocationOutline />
                            {item.location}</span>
                          <Button variant="link" className="learn-more p-0 text-color">
                            Learn More<AiOutlineExport className="ms-2"/>
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Online Services */}
      <section className="about-mahakaleshwar divine-service">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center Top-heading">
                <span className="text-color">Divine Services</span>
                <h2 className="pt-4 pb-3 m-0">Online Services</h2>
                <p className="m-0">Book your spiritual journey with ease. All services are available online for<br /> your convenience.</p>
              </div>
            </Col>
            <Col md={12} className="bhasma-articard">
              <Row className="align-items-center">
                <Col md={6} className="p-0">
                  <img src="images/home/bhasma-aarti.png" alt="" />
                </Col>
                <Col md={6}>
                  <div className="ps-5">
                    <div className="span-sacred mb-4">
                      <span className="">
                        <AiOutlineFire />
                        Most Sacred</span>
                    </div>
                    <h4>Bhasma Aarti</h4>
                    <p>The most unique and powerful ritual performed at 4:00 AM,<br /> where the Shivalinga is adorned with sacred ash.<br /> Witness this divine ceremony.</p>
                    <div className="card_flex">
                      <div className="inner-card">
                        <span>Timing</span>
                        <h5>4:00 AM</h5>
                      </div>
                      <div className="inner-card">
                        <span>Duration</span>
                        <h5>45 Minutes</h5>
                      </div>
                      <div className="inner-card">
                        <span>Advance Booking</span>
                        <h5>Required</h5>
                      </div>
                    </div>
                    <Button className="btn-bgcolor">Book Bhasma Aarti
                      <FaArrowRight className="ms-2" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>

          </Row>
          <Row className="mt-4 service-card">
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="images/home/pujan.png" />
                <Card.Body>
                  <div className="service-bgspan mb-3">
                    <span className="">
                      Personal Worship</span>
                  </div>
                  <Card.Title>Pujan / Abhishek</Card.Title>
                  <Card.Text>
                    Experience the divine ritual of Abhishek where devotees personally offer sacred waters and..
                  </Card.Text>
                  <Button variant="primary" className="btn-bgcolor">Book Abhishek</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="images/home/donation.png" />
                <Card.Body>
                  <div className="service-bgspan mb-3">
                    <span className="">
                      Support Temple</span>
                  </div>
                  <Card.Title>Donation</Card.Title>
                  <Card.Text>
                    Offer your humble contribution to Mahakaleshwar Temple. Your donations help..
                  </Card.Text>
                  <Button variant="primary" className="btn-bgcolor">Make Donation</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="images/home/darshan.png" />
                <Card.Body>
                  <div className="service-bgspan mb-3">
                    <span className="">
                      Quick Access</span>
                  </div>
                  <Card.Title>Sheeghra Darshan</Card.Title>
                  <Card.Text>
                    Quick Darshan pass to visit the temple efficiently. Skip long queues and complete..
                  </Card.Text>
                  <Button variant="primary" className="btn-bgcolor">Book Quick Darshan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src="images/home/book.png" />
                <Card.Body>
                  <div className="service-bgspan mb-3">
                    <span className="">
                      Stay Near Temple</span>
                  </div>
                  <Card.Title>Bhakt Niwas Booking</Card.Title>
                  <Card.Text>
                    The trust has constructed fully equipped accommodation near the temple for...
                  </Card.Text>
                  <Button variant="primary" className="btn-bgcolor">Book Accommodation</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </section>

      {/* Centre of Attraction */}
      <section className="about-mahakaleshwar center-attraction">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center Top-heading">
                <span className="text-color">Must Visit</span>
                <h2 className="pt-4 pb-3 m-0">Centre of Attraction</h2>
                <p className="m-0">Explore the magnificent attractions within the temple complex that <br />enhance your spiritual journey.</p>
              </div>
            </Col>
            {/* Featured Card */}
            <div className="featured-card">
              <div className="featured-content">
                <span className="badge-tag text-color">
                  <img src="icons/sun.svg" alt="" className="me-2" />
                  The Grand Corridor</span>
                <h3>Mahakal Lok</h3>
                <p className="mb-4">
                  Mahakal Lok in Ujjain is a grand corridor built around the sacred
                  Mahakaleshwar Jyotirlinga. Stretching over 900 meters, it features
                  majestic statues, 200+ sculptures of Lord Shiva’s divine forms,
                  and vibrant murals depicting mythological tales.
                </p>

                <div className="stats">
                  <div className="stat-box">
                    <strong className="text-color">900m</strong>
                    <span>Length</span>
                  </div>
                  <div className="stat-box">
                    <strong className="text-color">200+</strong>
                    <span>Statues</span>
                  </div>
                  <div className="stat-box">
                    <strong className="text-color">50+</strong>
                    <span>Murals</span>
                  </div>
                </div>

                <Button className="btn-bgcolor">
                  Explore Mahakal Lok <FaArrowRight />
                </Button>
              </div>
            </div>

            {/* Bottom Cards */}
            <Row className=" mt-4">
              <Col md={6}>
                <Card className="info-card">
                  <Card.Img src="/images/home/annakshetra.png" />
                  <Card.Body>
                    <span className="card-tag text-color">
                      <img src="icons/prasad.svg" alt="" className="me-2" />Divine Prasad</span>
                    <Card.Title>Annakshetra</Card.Title>
                    <Card.Text>
                      Annakshetra offers free and sacred meals (prasad) to devotees, following the tradition of Anna Daan, considered the...
                    </Card.Text>
                    <div className="Daily-Meals">
                      <span className="text-color">10000+ </span>
                      Daily Meals
                    </div>
                    <Button variant="outline-primary" className="outline-darshanbtn text-color" size="sm">
                      Learn More<FaArrowRight className="ms-2 text-color" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="info-card">
                  <Card.Img src="/images/home/bhakt-niwas.png" className="" />
                  <Card.Body>
                    <span className="card-tag text-color">
                      <img src="icons/pillgrim.svg" alt="" className="me-2" />
                      Pilgrim Accommodation</span>
                    <Card.Title>Bhakt Niwas</Card.Title>
                    <Card.Text>
                      Bhakt Niwas provides clean and comfortable accommodation for devotees, offering a peaceful stay close to the...
                    </Card.Text>
                    <div className="Daily-Meals">
                      <span className="text-color">500+ </span>
                      Rooms
                    </div>
                    <Button variant="outline-primary" className="outline-darshanbtn text-color" size="sm">
                      Learn More <FaArrowRight className="ms-2 text-color" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      {/* Awards Section */}
      <section className="awards-section about-mahakaleshwar ">
        <Container>
          <Col md={12}>
            <div className="text-center Top-heading">
              <span className="text-color">Recognition</span>
              <h2 className="pt-4 pb-3 m-0">Awards & Recognitions</h2>
              <p className="m-0">Celebrating our achievements and honors received over the years for <br />excellence in service.</p>
            </div>
          </Col>

          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="award-card text-center">
                <Card.Body>
                  <div className="img-border">
                    <img src="images/home/Excellence.svg" alt="" />
                    <img src="icons/award.svg" alt="" className="award-img" />
                  </div>
                  <span className="year">2015</span>
                  <Card.Title>Excellence in e-Governance</Card.Title>
                  <p>DST, Govt of MP</p>
                  <div className="stars">★★★★★</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="award-card text-center">
                <Card.Body>
                  <div className="img-border">
                    <img src="images/home/traveller.svg" alt="" />
                    <img src="icons/award.svg" alt="" className="award-img" />
                  </div>
                  <span className="year">2014</span>
                  <Card.Title>Traveller’s Choice Award</Card.Title>
                  <p>TripAdvisor</p>
                  <div className="stars">★★★★★</div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="award-card text-center">
                <Card.Body>
                  <div className="img-border">
                    <img src="images/home/skoch.svg" alt="" />
                    <img src="icons/award.svg" alt="" className="award-img" />
                  </div>
                  <span className="year">2013</span>
                  <Card.Title>SKOCH Order-of-Merit</Card.Title>
                  <p>India’s Best</p>
                  <div className="stars">★★★★★</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
