
import { Col, Container, Row } from "react-bootstrap";
import "./Gallery.scss";
const Gallery = () => {
    return (
        <>
            <section className="Gallery-banner"></section>
            <section className="pt-5 time-banner">
                <Container>
                    <div className="text-center">
                        <div>
                            <span className="line-left"></span>
                            <p className="text-uppercase">Welcome to the</p>
                            <span className="line-right"></span>
                        </div>
                        <h1 className="mt-3">Gallery</h1>
                    </div>
                    <Row className="gallery-media g-4">
                        <Col md={5}>
                            <img src="images/gallery/gallery1.jpg" alt="" />
                        </Col>
                        <Col md={7}>
                            <img src="images/gallery/gallery2.jpg" alt="" />
                        </Col>
                        <Col md={12}>
                            <img src="images/gallery/gallery3.jpg" alt="" />
                        </Col>
                        <Col md={5}>
                            <img src="images/gallery/gallery4.png" alt="" />
                        </Col>
                        <Col md={7}>
                            <img src="images/gallery/gallery5.png" alt="" />
                        </Col>
                        <Col md={4}>
                            <img src="images/gallery/gallery6.png" alt="" />
                        </Col>
                        <Col md={4}>
                            <img src="images/gallery/gallery7.png" alt="" />
                        </Col>
                        <Col md={4}>
                            <img src="images/gallery/gallery8.jpg" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
};

export default Gallery;
