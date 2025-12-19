
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Pujari.scss";
const pujariList = [
  { name: "Pt. Shri Gaurav Sharma", father: "Late Shri Chandramohan Sharma" },
  { name: "Pt. Shri Dilip Sharma", father: "Late Shri Sureshchandra Sharma" },
  { name: "Pt. Shri Vijayashankar Sharma", father: "Late Shri Mahadev Sharma" },
  { name: "Pt. Shri Vijay Sharma", father: "Shri Premnarayan Sharma" },
  { name: "Pt. Shri Ram Sharma", father: "Late Shri Tejnarayan Sharma" },
  { name: "Pt. Shri Ganeshnarayan Sharma", father: "Late Shri Mahadev Ji Sharma" },
  { name: "Pt. Shri Sanjay Sharma", father: "Late Shri Ganeshnarayan Sharma" },
  { name: "Pt. Shri Ajay Sharma", father: "Late Shri Sheshnarayan Sharma" },
  { name: "Pt. Late Shri Kailashnarayan Sharma", father: "Late Shri Shivnarayan Sharma" },
  { name: "Pt. Shri Amar Sharma", father: "S/O Late Shri Dinesh Sharma" },
  { name: "Pt. Shri Ashish Malviya", father: "S/O Late Shri Shantikumar Malviya" },
  { name: "Pt. Pt. Shri Akash Sharma", father: "S/O Shri Rajesh Sharma" },
  { name: "Pt. Shri Ghanshyam Sharma", father: "S/O Late Shri Ramchandra Sharma" },
  { name: "Pt. Pt. Shri Bharat Sharma", father: "S/O Late Shri Shrikrishna Sharma" },
  { name: "Pt. Shri Dinesh Sharma", father: "S/O Late Shri Sadashiv Sharma" },
  { name: "Pt. Shri Kamal Sharma", father: "S/O Late Shri Laxminarayan Sharma" },
];

const purohitList = [
  { name: "Shri Sharad Kumar Vyas", father: "Shri Gopal Vyas" },
  { name: "Late Shri Vikram Singh Rathore", father: "Late Shri Ram Singh Rathore" },
  { name: "Shri Dinesh Vyas", father: "Shri Sureshchandra Vyas" },
  { name: "Shri Sureshchandra Vyas", father: "Shri Maheshchandra Vyas" },
  { name: "Shri Maheshchandra Vyas", father: "Shri Shyamchandra Vyas" },
  { name: "Shri Shyamchandra Vyas", father: "Late Shri Ramchandra Vyas" },
  { name: "Late Shri Ramchandra Vyas", father: "S/O —" },
  { name: "Shri Anup Sharma", father: "S/O Shri Ratanlal Sharma" },
  { name: "Late Shri Rameshwar Joshi", father: "S/O Shri Vishwanath Joshi" },
  { name: "Shri Gajendra Sharma", father: "S/O Shri Ramesh Sharma" },
  { name: "Shri Vijay Upadhyay", father: "S/O Shri Ramlal Upadhyay" },
  { name: "Shri Lokesh Mishra", father: "S/O Shri Vishwanath Mishra" },
  { name: "Late Shri Ashok Sharma", father: "S/O Shri Ishwarchandra Sharma" },
  { name: "Late Shri Harishchandra Sharma", father: "S/O Shri Raghunath Sharma" },
  { name: "Shri Hemant Bhatt", father: "S/O Shri Siddharth Bhatt" },
  { name: "Shri Mukesh Sharma", father: "S/O Shri Manoharlal Sharma" },
  { name: "Shri Ganeshchandra Vishwakarma", father: "S/O Shri Narayan Vishwakarma" },
  { name: "Shri Vijay Dwivedi", father: "S/O Shri Surendra Dwivedi" },
  { name: "Late Shri Gopal Vyas", father: "S/O Late Shri Laxminarayan Vyas" },
  { name: "Shri Deepak Sharma", father: "S/O Shri Maheshchandra Sharma" },
  { name: "Shri Gopal Sharma", father: "S/O Shri Ratanlal Sharma" },
  { name: "Shri Diwakar Narayan Ji Karkarkar", father: "S/O Shri Narayan Ji Karkarkar" },
];
const MemberGrid = ({ title, list, theme }) => (
  <div className={`member-section ${theme}`}>
    <div className="section-title">{title}</div>
    <Row>
      {list.map((item, index) => (
        <Col lg={4} md={6} key={index} className="mb-3">
          <Card className="member-card">
            <Card.Body>
              <h6>{item.name}</h6>
              <p>S/O {item.father}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
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
      <section className="pujari-purohit-wrapper">
        <Container>
          <MemberGrid title="Pujari" list={pujariList} theme="pujari" />
          <MemberGrid title="Purohit" list={purohitList} theme="purohit" />
        </Container>
      </section>
    </>
  );
};

export default Pujari;
