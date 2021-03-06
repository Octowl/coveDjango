const React = require('react');

const {Navbar, Nav, NavItem, NavDropdown, MenuItem} = require('react-bootstrap');
const {Link} = require('react-router');

var NavbarInstance = function(props) {
    return (
        <Navbar inverse fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">COVE</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/login">login</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

module.exports = NavbarInstance;
