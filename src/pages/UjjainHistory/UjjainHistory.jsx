import { Col, Container, Row, Card } from "react-bootstrap";
import "./UjjainHistory.scss";
const temples = [
    {
        title: "Devi Harsiddhi",
        img: "/images/ujjian-history/harsiddhi.png",
        desc: "Shri Harsiddhi Templeis located between Mahakal in the eastand Ramghat in the west,and is the 13th Shakti Peethamong the 51 Shakti Peethas of Goddess Sati.Historical records revealthat Goddess Harsiddheshwariwas the revered deity of Emperor Vikramaditya,who was known as 'Mangalchandika'in ancient times."
    },
    {
        title: "Chintaman Ganesh",
        img: "/images/ujjian-history/chintaman.jpg",
        desc: "The famous Shri Chintaman Ganesh Temple in Avantika houses very ancient idols of three forms of Lord Ganesha. The Chintaman Ganesh idol, the largest Ganesh idol, was installed by Mother Sita. Next to it is Shri Ichhaman Ganesh (in the middle), and the third is Shri Siddhi Vinayak. It is said that this temple was worshipped by Lord Rama, Lakshmana, and Mother Sita themselves. Visiting this temple is believed to alleviate worries and anxieties.It is one of the six prominent Vinayakas."
    },
    {
        title: "Gadh Kalika",
        img: "/images/ujjian-history/kalika.jpg",
        desc: "The ancient temple of Goddess Kali located at Kalighat in Ujjain is known as Garh Kalika. It was established during the Mahabharata period, but the idol dates back to the Satya Yuga. This place of Kalika Mata can be reached directly from the Gopal Temple. It is called Garh Kalika because it is located in a place called Garh. A statue of a lion, the goddess's mount, is situated in front of the temple's entrance. There are two guesthouses on either side, and the temple of the goddess is in the middle."
    },
    {
        title: "Kaal Bhairav",
        img: "/images/ujjian-history/bhairav.jpg",
        desc: "Located about 8 km from Ujjain city,on the banks of the Shipra River, is the Kal Bhairav ​​Temple.This temple of Kal Bhairav ​​is believed to be approximately six thousand years old.Here, Lord Kal Bhairavis said to consume alcohol in his physical formKal Bhairav ​​is consideredthe guardian of Lord Mahakal."
    },
    {
        title: "Dwarkadhish Gopal Mandir",
        img: "/images/ujjian-history/gopal.png",
        desc: "This famous temple is the second largest temple in the city. The temple's silver gates are the main attraction. The temple courtyard and circumambulation path are grand and spacious. Janmashtami is a special festival celebrated here. On the day of Baikunth Chaturdashi, the procession of Mahakal arrives here at midnight for the Harihar Milan ceremony, and at the time of the Bhasma Aarti, the procession of Gopal Krishna goes to Mahakaleshwar."
    },
    {
        title: "Angareshwar Mahadev",
        img: "/images/ujjian-history/angareshwar.jpg",
        desc: "The importance of Shri Angareshwar Mahadev is mentioned in the Skanda Purana. According to the Puranas, Ujjain is considered the birthplace of the planet Mars. Therefore, special worship performed at Angareshwar Mahadev for the appeasement of Mars is considered fruitful. Religious belief holds that this worship alleviates the ill effects of Mars."
    },
    {
        title: "Navagraha Shani Mandir",
        img: "/images/ujjian-history/shani.png",
        desc: "The Navagraha Temple is situated on the banks of the Shipra River.This is a unique temple in all of Ujjain, dedicated to the planets of our solar system.This place is also called Triveni Tirtha by the local people.This temple is located only 6 km from the main city."
    },
    {
        title: "Sandipani Ashram",
        img: "/images/ujjian-history/sandipani.png",
        desc: "Lord Krishna received his education at Sandipani Ashram.The Maharshi Sandipani Ashram, located in Ujjain,is the place where Sage Sandipani performed his The sage performed intense austerities here.It was at this very place that Maharshi Sandipaniestablished the ashram for imparting education in the Vedas, Puranas, and other scriptThe Sandipani Ashram is mentioned in the MahabharataSrimad Bhagavad Gita, Brahma Purana, Agni Purana,and Brahma Vaivarta Purana."
    },
    {
        title: "Gaya Kotha Tirtha",
        img: "/images/ujjian-history/gaya.jpg",
        desc: "The ancient and religious city of Ujjain is home to Gayakota, a place of unique significance because of its direct connection to Lord Krishna. Located there are the thousand footprints of Lord Vishnu. By performing a milk offering on these footprints, devotees who visit this sacred site seek liberation for their ancestors and the fulfillment of their desires. Offering milk and water at the thousand lotus feet of Lord Vishnu in the Gayakota temple for the peace of one's ancestors is considered highly meritorious, and its importance increases even further during the Shradh period (ancestral rites)."
    }
];
const UjjainHistory = () => {
    return (
        <>
            <section className="ujjainhistory-banner"></section>
            {/* The Legacy of Ujjain */}
            <section className="ujjain-historysection">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12} md={12}>
                            <div className="ujjain-history-content">
                                <div className="text-center top-heading">
                                    <span className="section-tag">HERITAGE</span>
                                    <h1>The Legacy of Ujjain</h1>
                                    <div className="title-line"></div>
                                </div>

                                <p>
                                    Ujjain is a major religious city of Madhya Pradesh, situated on the banks of the Kshipra River. It is an ancient city with a rich historical background. During the reign of Emperor Vikramaditya, Ujjain served as the capital of his kingdom. It is also known as the city of Kalidasa.
                                </p>

                                <p>
                                    Every twelve years, the Simhastha Kumbh Mela is organized in Ujjain. One of the twelve Jyotirlingas of Lord Shiva, Shri Mahakaleshwar, is located in this sacred city. Ujjain is approximately 55 km from Indore and has been known by ancient names such as Avantika, Ujjayini, and Kanakshringā.
                                </p>

                                <p>
                                    References in the Mahabharata and Puranas mention that Lord Krishna and Balram received education
                                    at the ashram of Guru Sandipani in Ujjain. The city has a vast historical legacy and remains one of
                                    India’s most revered spiritual centers.
                                </p>

                                <p>
                                    In his renowned work Meghadūta, Mahakavi Kalidasa, the great classical poet of India, has given a
                                    beautiful and vivid description of Ujjayini. Known as Avantika, this sacred city is regarded as a land of
                                    piety (punya), penance (tapas), and spiritual liberation (moksha). Ujjayini is also famous in the field of
                                    astrology and holds a position of special importance.
                                </p>
                                <p>
                                    Generally, cities that served as central hubs of ancient culture are known by no more than two names.
                                    However, Ujjayini, the sacred land of Mahakal, is unique in this respect, as it is associated with
                                    numerous names, which makes it exceptional.
                                </p>

                                <div className="ancient-names-card">
                                    <h6 className="mb-4 text-center">Ancient Names of Ujjain</h6>
                                    <div className="names-list">
                                        <span>Kanakshring</span>
                                        <span>Kushasthali</span>
                                        <span>Avantika</span>
                                        <span>Padmavati</span>
                                        <span>Kumudvati</span>
                                        <span>Pratikalp</span>
                                        <span>Amaravati</span>
                                        <span>Vishala</span>
                                        <span>Ambika</span>
                                        <span>Hiranyavati</span>
                                        <span>Bhogvati</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Temples To Visit */}
            <section className="temple-visit">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center top-heading">
                                <span className="section-tag">Sacred Sites</span>
                                <h1>Temples To Visit</h1>
                                <div className="title-line mb-3"></div>
                                <p className="discover-text">Discover the divine energy of Ujjain through its ancient and revered temples.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {temples.map((item, index) => (
                            <Col lg={4} md={6} key={index} className="mb-4">
                                <Card className="temple-card">
                                    <div className="img-wrap">
                                        <Card.Img src={item.img} alt={item.title} />
                                    </div>
                                    <Card.Body className="h-100">
                                        <h5>{item.title}</h5>
                                        <p className="m-0">{item.desc}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            {/* How to Reach */}
            <section className="reach-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center top-heading">
                                <span className="section-tag">Travel Guide</span>
                                <h1>How to Reach Ujjain</h1>
                                <div className="title-line"></div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center gy-3">
                        <Col md={4}>
                            <div className="reach-card">
                                <img src="/icons/Airways.svg" alt="Airways" />
                                <h6>Airways</h6>
                                <p>
                                    The nearest airport is Indore (53 km).
                                    Flights are available from Mumbai, Delhi,
                                    Ahmedabad and Gwalior.
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="reach-card">
                                <img src="/icons/Railways.svg" alt="Railways" />
                                <h6>Railways</h6>
                                <p>
                                    Ujjain is directly connected by rail to
                                    Ahmedabad, Mumbai, Delhi, Varanasi,
                                    Chennai, Bengaluru, Hyderabad, Jaipur,
                                    Howrah and more.
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="reach-card">
                                <img src="/icons/Roadways.svg" alt="Roadways" />
                                <h6>Roadways</h6>
                                <p>
                                    Ujjain is well connected by road to Indore,
                                    Mumbai, Pune, Jaipur, Ahmedabad,
                                    Nashik, Mathura and nearby cities.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* google map */}
            <section>
                <img src="images/google-map.svg" alt="google map" className="w-100"/>
            </section>
        </>
    );
};

export default UjjainHistory;
