
import { Col, Container, Row } from "react-bootstrap";
import "./TempleHistory.scss";
const historyData = [
    {
        period: "8th Century AD",
        title: "Ancient Period: Origins and Legendary Roots",
        image: "/images/history/ancient.jpg",
        subtitle: "Maratha Reconstruction and Modern Glory",
        desc:
            "The history of the Mahakaleshwar Temple dates back to antiquity, deeply rooted in Vedic and Puranic traditions. According to local lore, the temple was first established by King Chandrasena...",
        align: "right",
    },
    {
        period: "11th–12th Century",
        title: "Medieval Period",
        image: "/images/history/medieval.jpg",
        subtitle: "Destruction and Resilience",
        desc:
            "The medieval era was a period of significant turmoil for the temple. Between the 11th and 12th centuries, despite repeated invasions...",
        align: "left",
    },
    {
        period: "18th Century Onwards",
        title: "Present Era",
        image: "/images/history/present.jpg",
        subtitle: "Maratha Reconstruction and Modern Glory",
        desc:
            "The modern grandeur of the temple was shaped by the Maratha rulers. Ahilyabai Holkar played a significant role in rebuilding the structure...",
        align: "right",
    },
];

const TempleHistory = () => {
    return (
        <>
            <section className="templehistory-banner"></section>

            <section className="pt-5 time-banner">
                <Container>
                    <div className="text-center pt-5">
                        <div>
                            <span className="line-left"></span>
                            <p className="text-uppercase">The history of</p>
                            <span className="line-right"></span>
                        </div>
                        <h1 className="mt-3">The Mahakaleshwar Temple</h1>
                    </div>
                </Container>
            </section>
            <section>

                {/* Timeline */}
                <div className="timeline-wrapper">

                    {/* Item 1 */}
                    <div className="timeline-item right">
                        <div className="year-pill">6th Century AD</div>
                        <div className="content-card">
                            <img src="/images/history/ancient.png" alt="" />
                            <h4>Ancient Period: Origins and Legendary Roots</h4>
                            <span>Maratha Reconstruction and Modern Glory</span>
                            <p>
                                The history of the Mahakaleshwar temple dates back to antiquity, deeply rooted in Vedic and Puranic traditions. According to local lore, this is the sacred site where Goddess Parvati performed intense penance to attain Lord Shiva as her husband. Historical records suggest that in the 6th century BCE, King Chandapradyot of Ujjain appointed his son, Kumar Sambhav, to oversee the temple's administration. By the 10th century, during the reign of the Paramara kings of Malwa, the temple reached a peak of architectural beauty and was frequently mentioned in contemporary literature as a magnificent center of pilgrimage.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="timeline-item left text-end">
                        <div className="year-pill">11th & 12th <br />Century</div>
                        <div className="content-card">
                            <img src="/images/history/medieval.png" alt="" />
                            <h4>Medieval Period</h4>
                            <span>Destruction and Resilience</span>
                            <p>
                                The medieval era was a period of significant turmoil for the temple. Between the 11th and 12th centuries, despite repeated regional conflicts and invasions by the Ghaznavids, the temple maintained its religious sanctity under rulers like Udayaditya and Narvarman. However, a major turning point occurred in 1235 CE when Sultan Iltutmish invaded Ujjain and demolished the Mahakaleshwar temple structure. Despite the destruction of the physical building, the site remained a powerful spiritual magnet for Hindu devotees for the next 500 years, preserving its identity as a premier Jyotirlinga even without a formal grand structure.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="timeline-item right">
                        <div className="year-pill">1947 Onwards</div>
                        <div className="content-card">
                            <img src="/images/history/present.png" alt="" />
                            <h4>Present Era</h4>
                            <span>Maratha Reconstruction and Modern Glory</span>
                            <p>
                                The modern grandeur of the temple we see today is a result of the Maratha revival in the 18th century. In the 1730s, after the Maratha conquest of Malwa, General Ranoji Rao Shinde entrusted the administration to his Diwan, Ramchandra Baba Shenvi. It was Shenvi who reconstructed the current Mahakaleshwar temple structure during the fourth decade of the 18th century. Today, the temple stands as a vast complex housing numerous shrines, including the Sakshi Gopal and Nagchandreshwar temples. It continues to be world-renowned for traditions like the "Sawari" (royal procession) during the month of Shravan, where Lord Mahakal is believed to tour the city to oversee the welfare of his subjects.
                            </p>
                        </div>
                    </div>
                </div>

            </section>


        </>
    );
};

export default TempleHistory;
