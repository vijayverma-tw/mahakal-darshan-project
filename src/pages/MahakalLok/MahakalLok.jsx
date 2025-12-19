
import { Container } from "react-bootstrap";
import "./MahakalLok.scss";
import GlimpsesSlider from "../../components/common/GlimpsesSlider/GlimpsesSlider";

const MahakalLok = () => {
    return (
        <>
            <section className="mahakal-banner"></section>
            <section className="pt-5 time-banner">
                <Container>
                    <div className="text-center">
                        <div>
                            <span className="line-left"></span>
                            <p className="text-uppercase">Abouts</p>
                            <span className="line-right"></span>
                        </div>
                        <h1 className="mt-3">Mahakal Lok</h1>
                    </div>
                    <div className="about-mahakalcard">
                        <h5 className="mb-3">A Divine Corridor of Faith & Heritage</h5>
                        <span className="mb-4 d-block">Developed at a cost of ₹351 crore in Ujjain, the Shri Mahakal Mahalok Project is a transformative initiative aimed at preserving and enhancing the architectural and cultural grandeur of the corridor. Rooted in the city’s ancient traditions and religious significance, the project seeks to improve the visitor experience, promote cultural activities, and ensure the long-term conservation of Ujjain’s cultural heritage.</span>
                        <span className="mb-4 d-block">
                            The corridor, stretching up to 910 meters, is adorned with intricate carvings, sculptures, and murals that depict various mythological narratives. The project focuses on enhancing and preserving these architectural marvels, ensuring their longevity and continued cultural relevance.</span>
                        <span className="mb-4 d-block">
                            The Shri Mahakal Mahalok is based on the Shiva Purana. This project features 76 sculptures, each depicting a unique aspect of the rich mythology associated with Lord Shiva. Additionally, a mural wall with 52 paintings based on the Shiva Purana has been strategically placed along the corridor, enhancing its visual appeal. The corridor in Mahakal Lok is adorned with 108 meticulously designed pillars, further adding to the grandeur and symbolism of the structure.
                        </span>
                        <span>
                            To ensure the comfort, entertainment, and relaxation of devotees visiting Mahakaleshwar, attractive statues have been installed to introduce them to the glory of Shiva, Shakti, and Ujjain. These statues are captivating the devotees, who are having a new experience upon arriving here. They are not only happy but also expanding their knowledge. Upon entering this complex, they will feel as if they have arrived at Shiva's abode, where the natural beauty makes their journey pleasant and memorable.
                        </span>
                    </div>
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
                        <h1 className="mt-3">Mahankal Lok</h1>
                    </div>
                    <GlimpsesSlider />
                </Container>
            </section>
        </>
    );
};

export default MahakalLok;
