import { Button, Container, Nav, NavLink, Navbar as NavbarBS } from "react-bootstrap" 

export function Navbar() {
    return <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            <Button style={{ width: "3rem", height: "3rem", position: "relative" }}
                    variant="outline-primary"
                    className="rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="cart"><circle cx="90" cy="102" r="8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"></circle><circle cx="50" cy="102" r="8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"></circle><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M30 34h83.1c2.8 0 4.7 2.8 3.7 5.4l-15.9 41.4C99.7 84 96.7 86 93.4 86H46.6c-3.8 0-7.1-2.7-7.9-6.5L30 34zm-.1 0-1.5-7.6c-.7-3.7-4-6.4-7.8-6.4h-7.2M90.9 46h3M33 46h48.9"></path></svg>
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style = {{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>
                    3
            </div>
            </Button>
        </Container>
    </NavbarBS>
}