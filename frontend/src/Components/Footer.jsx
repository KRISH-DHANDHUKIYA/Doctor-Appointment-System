import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="mt-5 p-4 text-black"
            style={{
                backgroundImage:
                    'url("https://html.narzotech.com/madifax/images/footer_bg.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container>
                {/* TOP FOOTER */}
                <Row className="mb-4">
                    <Col lg={3} md={6} sm={12}>
                        <Link to="/">
                            <img
                                src="https://doccure-wp.dreamstechnologies.com/landing/assets/img/logo-01.svg"
                                alt="logo"
                                className="img-fluid mb-4"
                            />
                        </Link>

                        <p style={{ color: "#5C728E" }}>
                            There are to popular belie Lorem is Ipsum is not simply random.
                        </p>

                        <div className="mb-3">
                            <strong>Hello to :</strong>{" "}
                            <a
                                href="mailto:support@gmail.com"
                                className="text-black text-decoration-none"
                            >
                                support@gmail.com
                            </a>
                        </div>

                        <div className="d-flex align-items-center gap-3" >
                            <span>Follow :</span>
                            <a href="#" className="text-black">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-black">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-black">
                                <FaPinterestP />
                            </a>
                            <a href="#" className="text-black">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <h5 className="mb-4">Company</h5>

                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-black text-decoration-none">Home</Link></li>
                            <li><Link to="/about" className="text-black text-decoration-none">About us</Link></li>
                            <li><Link to="/contact" className="text-black text-decoration-none">Contact</Link></li>
                            <li><Link to="/doctors" className="text-black text-decoration-none">Doctors</Link></li>
                            <li><Link to="/gallery" className="text-black text-decoration-none">Gallery</Link></li>
                        </ul>
                    </Col>


                </Row>

                {/* BOTTOM FOOTER */}
                <Row>
                    <Col>
                        <div
                            className="
              d-flex flex-wrap
              justify-content-center justify-content-md-between
              align-items-center
              text-center text-md-start
              gap-3
            "
                        >
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()} Doccure. All rights reserved.
                            </p>

                            <ul className="d-flex flex-wrap gap-3 list-unstyled mb-0">
                                <li>
                                    <Link to="/terms" className="text-black text-decoration-none">
                                        Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/cookies"
                                        className="text-black text-decoration-none"
                                    >
                                        Cookies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/privacy"
                                        className="text-black text-decoration-none"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
