import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addReview } from '../actions/reviewActions';

class ReviewInput extends React.Component {

  state = {
    description: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview(this.state, this.props.course.id);
    this.setState({
      description: ''
    });
  };

  render() {
    return (
      <div className='ReviewForm'>
        <Form onSubmit={this.handleSubmit}>       

          <FormGroup row>
            <Label for='description' sm={2}>Description:</Label>
            <Col md={6}>
              <Input type='text' name='description' value={this.state.description} placeholder='Easy, challenging...' onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <Button>Review this course!</Button>
        </Form>
      </div>
    );
  }
};

export default connect(null, { addReview })(ReviewInput);