const React = require('react');

const NavbarInstance = require('./navbarInstance.jsx');

const MainLayout = function(props) {
    return (
        <div className="app">
            <NavbarInstance></NavbarInstance>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
};

module.exports = MainLayout;
