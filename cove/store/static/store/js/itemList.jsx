const React = require('react');
const axios = require('axios');
const {Link} = require('react-router');

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
            <Item key={item.id} item={item} />
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

module.exports = ItemListContainer;
