
import { Container } from "react-bootstrap";
import "./Pujari.scss";

const Pujari = () => {
  return (
    <>
      <section className="pujari-banner"></section>
      <section className="pt-5 time-banner">
        <Container>
          <div className="text-center">
            <div>
              <span className="line-left"></span>{" "}
              <p className="text-uppercase">Introduction</p>
              <span className="line-right"></span>
            </div>
            <h1 className="mt-3">Pujari & Purohit</h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pujari;
