const React = require('react');
const {
    Checkbox,
    Button,
    ButtonToolbar,
    Form,
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Alert
} = require('react-bootstrap');
const axios = require('axios');
const {browserHistory} = require('react-router');

var LoginContainer = React.createClass({
    getInitialState: function() {
        return {
            signup: false,
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    },

    handleSignup: function() {
        this.setState({signup: !this.state.signup});
    },

    handleChange: function(e) {
        this.setState({
            [e.target.id]: e.target.value,
            error: null
        })
    },

    handleSubmit: function(e){
        e.preventDefault();

        let endpoint = `/api/auth/${this.state.signup ? 'signup' : 'login'}/`
        let payload = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        let config = {
            headers: {
                "X-CSRFToken": csrfToken
            }
        }

        axios.post(endpoint, payload, config)
        .then(() => browserHistory.push('/'))
        .catch(error => {
            console.error(error)
            this.setState({error: error})
        });
    },

    render: function() {
        return (
            <div className="container">
                {this.state.error ? (
                    <Col smOffset={2} sm={10}>
                        <Alert bsStyle="danger">
                            <strong>Login was unsuccessful!</strong> Make sure your username and password are correct
                            </Alert>
                    </Col>
                ) : null}
                <LoginForm
                    signup={this.state.signup}
                    handleSignup={this.handleSignup}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    />
            </div>
        )
    }
});

var LoginForm = function(props) {
    return (
        <Form horizontal onSubmit={props.handleSubmit}>
            {props.signup ? (
                <div>
                    <FormGroup controlId="firstName">
                        <Col componentClass={ControlLabel} sm={2}>
                            First name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="John" onChange={props.handleChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="lastName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Last name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Smythe" onChange={props.handleChange}/>
                        </Col>
                    </FormGroup>
                </div>
            ) : null}

            <FormGroup controlId="email">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl type="email" placeholder="john.smythe@spiffing.co.uk" onChange={props.handleChange} />
                </Col>
            </FormGroup>


            <FormGroup controlId="password">
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl type="password" placeholder="Password" onChange={props.handleChange} />
                </Col>
            </FormGroup>

            {props.signup ? (
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox>Register as a seller</Checkbox>
                    </Col>
                </FormGroup>
            ) : null}

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <ButtonToolbar>
                        <Button type="submit">
                            {props.signup ? "Signup" : "Login"}
                        </Button>
                        <Button bsStyle="link" onClick={props.handleSignup}>
                            {props.signup ? "Login" : "Signup"}
                        </Button>
                    </ButtonToolbar>
                </Col>
            </FormGroup>
        </Form>
    );
};

module.exports = LoginContainer;
