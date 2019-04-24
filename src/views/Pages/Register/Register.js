import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback } from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange  = this.handleChange .bind(this);
    this.state = {
      username: '',
      email: '',
      password:'',
      confirmpassword:''
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(this.state));
    this.props.history.push('./')
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]:value
    })
  }

  render() {
    const disabledCondition = 
      !this.state.email 
      || !this.state.username 
      || !this.state.password  
      || !this.state.confirmpassword
      || this.state.password!==this.state.confirmpassword;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onFormSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                        type="text" 
                        placeholder="Username" 
                        autoComplete="username"
                        name = "username" 
                        value={this.state.username}
                        onChange={this.handleChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input 
                        type="text" 
                        placeholder="Email" 
                        autoComplete="email"
                        name = "email" 
                        value={this.state.email}
                        onChange={this.handleChange} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                        type="password" 
                        placeholder="Password" 
                        autoComplete="new-password"
                        name = "password" 
                        value={this.state.password}
                        onChange={this.handleChange} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      {this.state.password===this.state.confirmpassword?
                        <Input 
                        type="password" 
                        placeholder="Repeat password" 
                        autoComplete="new-password"
                        name = "confirmpassword"
                        value={this.state.confirmpassword}
                        onChange={this.handleChange} />
                        :
                        <Input invalid
                        type="password" 
                        placeholder="Repeat password" 
                        autoComplete="new-password"
                        name = "confirmpassword"
                        value={this.state.confirmpassword}
                        onChange={this.handleChange} />}
                        <FormFeedback>Oh noes! both passwords doesnt match</FormFeedback>
                    </InputGroup>
                    
                    <Button 
                    color="success" block  
                    disabled={disabledCondition}
                    >Create Account</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
