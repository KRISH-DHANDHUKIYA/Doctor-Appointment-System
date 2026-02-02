import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-white mb-3 shadow-sm" sticky='top'>
                <Container >
                    <Navbar.Brand as={Link} to="/"><img src="https://doccure-wp.dreamstechnologies.com/landing/assets/img/logo-01.svg" alt="logo" className="img-fluid"
                        style={{ maxHeight: "40px" }} /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img src="https://doccure-wp.dreamstechnologies.com/landing/assets/img/logo-01.svg" alt="logo" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="align-items-center mx-auto gap-4 pe-3">
                                <Link to="/" className='text-black text-decoration-none'>Home</Link>
                                <Link to="/about" className='text-black text-decoration-none'>About</Link>
                                <Link to="/contact" className='text-black text-decoration-none'>Contact</Link>
                                <Link to="/doctors" className='text-black text-decoration-none'>Doctors</Link>
                                <Link to="/gallery" className='text-black text-decoration-none'>Gallery</Link>
                            </Nav>

                            <Form className="d-flex gap-2 mt-3 mt-lg-0 justify-content-lg-end justify-content-center align-items-center flex-column flex-lg-row">
                                <Button
                                    variant="outline-danger rounded-pill"
                                    as={Link}
                                    to="/login"
                                >
                                    Login
                                </Button>

                                <Button className="book-btn rounded-pill px-4 py-2" >
                                    Book Appointment
                                </Button>
                            </Form>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;