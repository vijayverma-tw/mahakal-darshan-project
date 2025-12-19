import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./PujanAbhishek.scss";
const pujanList = [
    {
        title: "General Puja",
        desc: "Flowers, incense, diya and fruits are offered to Lord Shiva for peace and happiness.",
        image: "/images/pujan/1.jpg",
        price: "Rs. 100/-",
    },
    {
        title: "Shivmahima Path",
        desc: "Recitation that praises the greatness of Lord Shiva.",
        image: "/images/pujan/2.png",
        price: "Rs. 200/-",
    },
    {
        title: "Rudrabhishek vaidik Puja (by 1 Brahmin)",
        desc: "Abhishek of the Shivling with water, milk and Vedic mantras.",
        image: "/images/pujan/3.png",
        price: "Rs. 300/-",
    },
    {
        title: "Rudrabhishek Ekadashani (11 Avartan) Shiv Mahimn Strot",
        desc: "Chanting of the Shiv Mahimn Stotra.",
        image: "/images/pujan/4.png",
        price: "Rs. 500/-",
    },
    {
        title: "Rudrabhishek (11 Avartan) Rudra Patha (by 1 Brhamin)",
        desc: "Abhishek of Shivling with Panchamrit + Chanting of Rudram (Namakam & Chamakam) + Om Namah Shivaya.",
        image: "/images/pujan/5.jpg",
        price: "Rs. 1000/-",
    },
    {
        title: "Laghu Rudraabhishek (121 Paath) (by 1 Brhamin)",
        desc: "11 priests chant Rudra 121 times, offering water, milk and sacred items on the Shivling.",
        image: "/images/pujan/6.jpg",
        price: "Rs. 3000/-",
    },
    {
        title: "Maha Rudraabhishek",
        desc: "Maha Rudrabhishek is performed with continuous chanting of Rudram (Namakam & Chamakam) from Yajurveda, along with grand Abhishek of Shivling using Panchamrit and bilva leaves.",
        image: "/images/pujan/7.png",
        price: "Rs. 15000/-",
    },
    {
        title: "Mahamrutyunjay Jaap (1.25 Lakh jaap)",
        desc: "1.25 lakh chants of the Mahamrityunjay Mantra for protection, healing, and long life.",
        image: "/images/pujan/8.jpg",
        price: "Rs. 15000/-",
    },
];

const PujanAbhishek = () => {
    return (
        <>
            <section className="pujan-banner"></section>
            <section className="pt-5 time-banner">
                <Container>
                    <div className="text-center">
                        <div>
                            <span className="line-left"></span>
                            <p className="text-uppercase">Introduction</p>
                            <span className="line-right"></span>
                        </div>
                        <h1 className="mt-3">Divine Worship & Pujan</h1>
                    </div>
                </Container>
            </section>
            <section className="pt-4 pujan-section">
                <Container>
                    <Row className="g-4">
                        {pujanList.map((item, index) => (
                            <Col md={6} xs={12} className="" key={index}>
                                <Card className="pujan-card h-100">
                                    <div className="image-wrapper">
                                        <Card.Img src={item.image} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.desc}</Card.Text>
                                    </Card.Body>

                                    <div className="card-footer-custom">
                                        <div >
                                            <span className="Dakshina">Dakshina</span>
                                            <p className="price m-0">{item.price}</p>
                                        </div>
                                        <Button className="book-btn btn-bgcolor">Book Pujan</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PujanAbhishek;
