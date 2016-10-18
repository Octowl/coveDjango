/*jshint esversion:6*/

const React = require('react');
const {Router, Route, IndexRoute, browserHistory} = require('react-router');
const ReactDOM = require('react-dom');
const bootstrap = require('bootstrap/dist/css/bootstrap.css');
require('./css/base.css');

const MainLayout = require('./js/mainLayout.jsx');
const Home = require('./js/home.jsx');
const LoginForm = require('./js/loginForm.jsx');


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home} />
            <Route path="login" component={LoginForm}></Route>
        </Route>
    </Router>
), document.getElementById('root'));
