import React from 'react';
import { connect } from 'react-redux';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addCourse } from '../actions/courseActions';

class CourseInput extends React.Component {

  state = {
    name: '',
    address: '',
    image: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const path = `/courses`;
    this.props.addCourse(this.state, this.props.history, path);
    
    this.setState({
      name: '',
      address: '',
      image: ''
    });
  };


  render() {
    return (
      <div className='CourseFormContainer'>
        <Form className='CourseForm' onSubmit={this.handleSubmit}>
        {console.log(this.props)};
          {/* <FormGroup row> */}
          <h5>Add a New Course Below</h5>
          {/* </FormGroup> */}

          <FormGroup row>
            <Label for='name' sm={2}>Name of course</Label>
            <Col md={5}>
              <Input type='text' name='name' value={this.state.name} placeholder='Five Ponds' onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for='address' sm={2}>Address</Label>
            <Col md={5}>
              <Input type='text' name='address' value={this.state.address} placeholder='123 A St' onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for='image' sm={2}>Image Link</Label>
            <Col md={5}>
              <Input type='text' name='image' value={this.state.image} onChange={this.handleChange} />
            </Col>
          </FormGroup>

          <Button>Add Course</Button>
        </Form>
      </div>
    );
  }
};

export default connect(null, { addCourse })(CourseInput);