import { Card, Col, Container, Row } from "react-bootstrap";
import "./TemplePremises.scss";
const temples = [
    {
        title: "लक्ष्मी नरसिंह मंदिर",
        image: "/images/premises/1.png",
        desc:
            "यह मंदिर, श्री महाकाल मंदिर परिसर के गलियारे में स्थित है | स्कन्दपुराण के अनुसार हिरण्यकशिपु के वध के बाद जब भगवान् नृसिंह का क्रोध शांत नहीं हुआ, तो शिव के कहने पर नृसिंह भगवान् उज्जैन में इसी स्थान पर आए तथा उनका क्रोध शांत हुआ | इस मंदिर में नृसिंह दरबार है।| भगवान् नृसिंह के साथ लक्ष्मी तथा प्रभाद है।| ",
    },
    {
        title: "सिद्धि सिद्धि गणेश",
        image: "/images/premises/2.jpg",
        desc:
            "नृसिंह मंदिर के आगे ही रिद्धि-सिद्धि गणेश मंदिर स्थित है|। यहां हर बुधवार को बड़ी संख्या में श्रद्धालु दर्शनार्थ आते हैं|।",
    },
    {
        title: "श्रीराम दरबार मंदिर",
        image: "/images/premises/3.png",
        desc:
            "गलियारे से कोटीर्थ की ओर नीचे उतरने पर श्रीराम दरबार मंदिर स्थित है|। संगमरमर के बने इस सुंदर मंदिर की स्थापना प्रसिद्ध संत श्री ब्रह्मचैतन्य गोदवलेकर महाराज के हाथों हुई थी|। लगभग सौ वर्ष प्राचीन इस मंदिर में श्रीराम, जानकी, लक्ष्मण तथा हनुमानजी की प्रतिमाएं विराजित हैं|।",
    },
    {
        title: "नवग्रह मंदिर",
        image: "/images/premises/4.png",
        desc:
            "उज्जैन का नवग्रह मंदिर एक ऐसा अनोखा स्थल है जहाँ एक ही जगह पर नौ ग्रहों की पूजा होती है। माना जाता है कि यहाँ दर्शन और पूजन से ग्रह दोष शांत होते हैं और जीवन में सुख-शांति आती है।",
    },
    {
        title: "साक्षी गोपाल मंदिर",
        image: "/images/premises/5.png",
        desc:
            "उज्जैन में महाकालेश्वर मंदिर के पवित्र परिसर के भीतर , साक्षी गोपाल का एक छोटा लेकिन शक्तिशाली मंदिर स्थित है । महाकाल के दर्शन करने के बाद, कई लोग अपनी पूजा पूरी करने के लिए इस मंदिर में आते हैं।",
    },
    {
        title: "जुना महाकाल",
        image: "/images/premises/6.jpg",
        desc:
            "मुगलकाल में इस शिवलिंग को खंडित करने की आशंका बढ़ी तो पुजारियों ने इसे छुपा दिया था और इसकी जगह दूसरा शिवलिंग रखकर उसकी पूजा करने लगे थे। बाद में उन्होंने उस शिवलिंग को वहीं महाकाल के प्रांगण में अन्य जगह स्थापित कर दिया जिसे आज 'जूना महाकाल' कहा जाता है",
    },
];

const TemplePremises = () => {
    return (
        <>
            <section className="templepremises-banner"></section>
            <section className="premises-section py-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="text-center">
                                <h1>Sacred Temple Complex</h1>
                                <p className="m-0 para">
                                    The Mahakaleshwar Temple complex houses numerous sacred shrines, each with its own spiritual<br/> significance and historical importance. These temples form an integral part of the religious and cultural<br/> heritage of Ujjain, attracting devotees from across the country.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {temples.map((item, index) => (
                            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                                <div className="temple-card h-100">
                                    <div className="image-wrapper">
                                        <Card.Img src={item.image} />
                                    </div>

                                    <Card.Body>
                                        <Card.Title className="text-center mb-3">{item.title}</Card.Title>
                                        <Card.Text>{item.desc}</Card.Text>
                                    </Card.Body>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Quote Box */}
                    <div className="quote-box text-center mt-2">
                        <p className="mb-1">
                            “Each temple in the Mahakal premises carries the divine blessing of
                            Lord Shiva”
                        </p>
                        <span>
                            Visit these sacred shrines to experience the spiritual heritage of
                            Ujjain
                        </span>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TemplePremises;