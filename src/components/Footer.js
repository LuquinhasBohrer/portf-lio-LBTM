import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo forma.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://wa.me/5551997505450?text=Ol%C3%A1%20tenho%20interesse%20em%20fazer%20um%20orçamento%20de%20um%20site%20com%20vocês!%20Poderia%20me%20me%20ajudar?"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100092013967259"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/lbtmdesenvolvedoresweb?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© 2023. Todos direitos reservados LBTM</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
