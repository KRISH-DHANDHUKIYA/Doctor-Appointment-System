import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nopage = () => {
    return (
        <>
            <Container
                fluid
                className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
            >
                <h1 className="display-1 fw-bold text-danger">404</h1>

                <h3 className="mb-3">Page Not Found</h3>

                <p className="text-muted mb-4">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                <Button as={Link} to="/" variant="success">
                    Back to Home
                </Button>
            </Container>
        </>
    );
};

export default Nopage;
