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

var Home = function(props) {
    return (
        <div className="container">
            <ItemListContainer />
        </div>
    )
}

var ItemListContainer = React.createClass({
    getInitialState: function() {
        return {
            items: []
        }
    },

    componentDidMount: function() {
        axios.get('api/items/')
        .then(response => this.setState({items: response.data}))
    },

    render: function(){
        return (<ItemList items={this.state.items} />)
    }
})

var ItemList = React.createClass({
    render: function() {
        return (
            <div className="row">
                {this.props.items.map(this.createItem)}
            </div>
        );
    },

    createItem: function(item) {
        return (
            <Item item={item} />
        );
    }
})

var Item = function(props) {
    var item = props.item
    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={item.image} alt="" />
                <div className="caption">
                    <h4 className="pull-right">{item.price}KWD</h4>
                    <h4><Link to="/">{item.name}</Link>
                    </h4>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
), document.getElementById('root'));
