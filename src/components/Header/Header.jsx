import { Container, Nav, Navbar } from "react-bootstrap"

export const Header = () => {
    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src="../src/assets/logorestaurant.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo" />

                </Navbar.Brand>
                <Navbar.Brand href="/">Restaurant München
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Products">Menú</Nav.Link>



                    </Nav>
                    <Nav>
                        <Nav.Link href="/auth/login">Log in</Nav.Link>
                        <Nav.Link href="/auth/SignUp">Sign Up</Nav.Link>
                        
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}