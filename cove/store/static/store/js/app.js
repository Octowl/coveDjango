var {Router, Route, IndexRoute, Link, browserHistory} = ReactRouter;
var {Navbar, Nav, NavItem, NavDropdown, MenuItem} = ReactBootstrap;

var browserHistory = ReactRouter.browserHistory;

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
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

var MainLayout = function(props) {
    return (
        <div className="app">
            <NavbarInstance></NavbarInstance>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
};

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>

        </Route>
    </Router>
), document.getElementById('root'));
