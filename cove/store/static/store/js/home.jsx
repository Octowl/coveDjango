const React = require('react');

const ItemListContainer = require('./itemList.jsx');

var Home = function(props) {
    return (
        <div className="container">
            <ItemListContainer />
        </div>
    )
}

module.exports = Home;
