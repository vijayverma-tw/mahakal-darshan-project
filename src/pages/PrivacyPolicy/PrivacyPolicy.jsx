import { Col, Container, Row } from "react-bootstrap";
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
            <section className="policy-detail mt-5">
                <Container>
                    <div className="policy-card mb-4">
                        <h2>Scope of Policy</h2>
                        <p className="policy-para">
                            This Privacy Statement discloses the privacy practices for Shri
                            Mahakaleshwar Temple Management Committee, Ujjain. ("Shri
                            Mahakaleshwar Temple Management Committee, Ujjain", "We" or "Us")
                            and how it treats the information that Shri Mahakaleshwar Temple
                            Management Committee collects and receives, including information
                            related to your past use of Mahakaleshwar Temple Management
                            Committee donation, products and services. This policy does not
                            apply to the practices of committee that Shri Mahakaleshwar Temple
                            Management Committee, Ujjain does not own or control or to people
                            that Shri Mahakaleshwar Temple Management Committee, Ujjain does
                            not employ or manage.
                        </p>
                    </div>
                    <h3>
                        <span>1</span>The information collected
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="info-para">
                            We will not knowingly use information collected on this website to
                            others in ways different from what is disclosed in this statement.
                            Shri Mahakaleshwar Temple Management Committee collects
                            information from our users at several different points on our
                            website. For purposes of this Privacy Statement, "Personally
                            Identifiable Information" refers to information that can directly
                            identify an individual; for example, such information may include
                            an individual's name, photograph, ID cards, mailing address, phone
                            number or email address.
                        </p>
                        <div className="ps-4 inner-box">
                            <h4 className="mt-3">
                                1.1 Information that Is Automatically Collected
                            </h4>
                            <p>
                                We use IP addresses, to analyze identity of booking area, track
                                users' movements, and gather broad demographic information for
                                aggregate use. IP addresses are not linked to Personally
                                Identifiable Information.
                            </p>
                            <h4 className="mt-3">
                                1.2 Information that Is Actively Submitted
                            </h4>
                            <p>
                                A user must provide contact information (such as name and email
                                address) so that we can stay in touch with our users. This
                                information is also used to fulfill booking, order and
                                registration requests. To donate online or for other service
                                ordered, a user must provide contact information (such as name
                                and shipping address) and financial information (such as a
                                credit card number and its expiration date). This information is
                                used for billing purposes, with the help of our service provider
                                (the bank which is providing us the payment gateway facilities),
                                and to fill users' orders. If we have trouble processing an
                                order, this contact information is used to get in touch with the
                                user.
                            </p>
                            <h4 className="mt-3">1.3 Third Party Advertisers</h4>
                            <p>
                                Presently, we do not provide any third party advertisement on
                                our website. No third party interference is yet allowed and
                                hence there is no question of collecting any information from
                                third party from our website.
                            </p>
                            <h4 className="mt-3">
                                1.4 Information Obtained from Third Parties
                            </h4>
                            <p>
                                Presently website is not collecting user information from third
                                party. Only in case of Payment Gateway, the bank (who so ever
                                provides the payment gateway services for online transaction)
                                collects very critical information like Credit card or debit
                                card number, Expiry date of credit card or debit card , Credit
                                card or debit card holders name, amount deducted from their
                                credit or debit account and any other relevant information which
                                is must for online transaction. These information are collected
                                by payment gateway service provider and these information along
                                with your contact information are stored with payment gateway
                                service provider.
                            </p>

                            <div className="info-box">
                                <p>
                                    The critical information like credit or debit card number, its
                                    expiry date, card holder’s name, bank name are not at all
                                    stored, infact it is stored with the payment gateway services
                                    providers.
                                </p>
                            </div>
                            <p className="mt-3">
                                The payment gateway service provider sends the transaction
                                number to Shri Mahakaleshwar Temple Management Committee website
                                on completion of payment procedure along with status of
                                transaction (like success, cancel or error). As Shri
                                Mahakaleshwar Temple Management Committee is not at all
                                collecting credit or debit card details there is no question of
                                storing it to the server of NIC, Trust and using it for any
                                purpose. These critical information is solely stored with
                                payment gateway service provider. They also never use your card
                                details with any third party except the bank from where they
                                need to deduct sanctioned amount by you.
                            </p>
                            <Row>
                                <Col md={6} xs={12}>
                                    <div className="transaction">
                                        <h5>a. On Successful transaction</h5>
                                        <p>
                                            In case of successful transaction of payment for donation,
                                            services or product the user will inform accordingly. The
                                            details will also informed via email. The amount will be
                                            deducted from user's respective bank and credited in the
                                            account of Shri Mahakaleshwar Temple Management Committee
                                            account. The user will get necessary entry in their
                                            passbook or bank statement directly from their bank. If
                                            payment is for donation, user will get income tax
                                            exemption certificate (in India only).
                                        </p>
                                    </div>
                                </Col>

                                <Col md={6} xs={12}>
                                    <div className="transaction">
                                        <h5>b. On Cancel of transaction</h5>
                                        <p>
                                            If user cancels the transaction in middle of the process,
                                            the details are stored in the database and transaction of
                                            record generated mentioning that user has interfered in
                                            middle of transaction and cancels the transaction. If
                                            order is already processed then cancellation is not
                                            possible.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <h3 className="mt-3">
                        <span>2</span>Communications
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            Welcome Emails and General Correspondence. We send a welcoming
                            email to the email address associated. This process is designed to
                            prevent e-mail addresses from being used without permission.
                            Established users will occasionally receive information on
                            products, services, special deals, and a newsletter.
                        </p>

                        <p className="policy-para mt-1">
                            Site and Service Updates. We send the user website and service
                            announcement updates. Users are not permitted to unsubscribe from
                            service announcements, which contain important information about
                            the website and/or service.
                        </p>
                    </div>

                    <h3 className="mt-3">
                        <span>3</span>How information is used
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            Communicating with Our Users. We use Personally Identifiable
                            Information to communicate with our users when they have
                            questions, concerns or comments about their accounts or the
                            services that we provide.
                        </p>

                        <p className="policy-para mt-1">
                            Information Shared With Third Parties. We do not share your
                            information with third party except you provide while payment
                            transaction to payment gateway service providers.
                        </p>
                        <p className="policy-para mt-1">
                            Partner with third parties. When the user signs up for or agrees
                            to receive a specific service provided by the third party, we
                            share the information that is needed for the third party to
                            provide the services.
                        </p>
                        <p className="policy-para mt-1">
                            Addressing Legal Issues. We provide Personally Identifiable
                            Information to respond to subpoenas, court orders, or legal
                            process, or to establish or exercise our legal rights or defend
                            against legal claims.
                        </p>
                    </div>

                    <h3 className="mt-3">
                        <span>4</span>Correction/Updating Personal Information
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            Users must provide accurate and correct contact information (name,
                            postal address, e-mail address, phone number) etc. On providing
                            wrong information if we are unable to process your request, then
                            we are not at all responsible for the act. We provide services and
                            product only if you provide the correct information.
                        </p>
                    </div>

                    <h3 className="mt-3">
                        <span>5</span>Opting Out
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            Users are provided an opportunity to "opt-out" of having their
                            information used for purposes not directly related to the services
                            they request. Users who no longer wish to receive our newsletter
                            or promotional materials from us may opt-out of receiving these
                            communications by replying and typing "unsubscribe" in the subject
                            line in the email or email your request to
                            office@mahakaleshwar.nic.in
                        </p>
                    </div>

                    <h3 className="mt-3">
                        <span>6</span>Use by Persons Under Age 18
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            This website is collecting payment for donation, various pooja
                            services and products sale. It is not intended for use by anyone
                            under the age of eighteen (18), and any individual under such age
                            should not provide us with Personally Identifiable Information.
                        </p>

                        <p className="policy-para mt-1">
                            Site and Service Updates. We send the user website and service
                            announcement updates. Users are not permitted to unsubscribe from
                            service announcements, which contain important information about
                            the website and/or service.
                        </p>
                    </div>

                    <h3 className="mt-3">
                        <span>7</span>Linking to Third Party Websites
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            This website may contains links to other websites. Please be aware
                            that we are not responsible for the privacy practices of such
                            other websites.
                        </p>
                    </div>

                    <h3 className="mt-3">
                        <span>8</span>Security
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            Users are required to keep their account passwords confidential
                            and do not share this information with others. If you choose to
                            reveal or share your password and Shri Mahakaleshwar Temple
                            Management Committee account name, we are unable to guarantee the
                            security of your account.
                        </p>
                    </div>

                    <h3 className="mt-3">
                        <span>9</span>Changes to Our Privacy Statement
                    </h3>
                    <div className="policy-card mb-4">
                        <p className="policy-para">
                            This Privacy Statement may change, and use of information that we
                            gather now is subject to the Privacy Statement that is in effect
                            as of the time of use. You are responsible for periodically
                            checking our Privacy Statement.
                        </p>
                    </div>
                </Container>
            </section>
            <section className="final-statement-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10} md={12}>
                            <div className="final-statement-box text-center">
                                <h5 className="title">Final Statement</h5>

                                <p className="desc">
                                    Shri Mahakaleshwar Temple Management Committee will use your
                                    information in accordance with the Privacy Statement that is
                                    currently in effect.
                                </p>

                                <p className="contact">
                                    If you have any questions about the security at our website,
                                    you can send an email to{" "}
                                    <a href="mailto:office@mahakaleshwar.nic.in">
                                        office@mahakaleshwar.nic.in
                                    </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PrivacyPolicy;
