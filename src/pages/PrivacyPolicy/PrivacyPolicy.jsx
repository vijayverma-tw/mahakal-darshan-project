import { Container } from "react-bootstrap";
import "./PrivacyPolicy.scss";
const PrivacyPolicy = () => {
    return (
        <>
            <section className="privacy-banner"></section>

            <section className="pt-5 time-banner">
                <Container>
                    <div className="text-center pt-5">
                        <div>
                            <span className="line-left"></span>
                            <p className="text-uppercase">Effective Date: 1st April, 2014</p>
                            <span className="line-right"></span>
                        </div>
                        <h1 className="mt-3">Privacy Statement</h1>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default PrivacyPolicy;
