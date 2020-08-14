import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { deleteReview } from '../actions/reviewActions';

const ReviewsList = props => {

  const handleDelete = (review) => {
    props.deleteReview(review.id, review.course_id)
  }

  return (
    <div className='ReviewsList'>
      {props.reviews && props.reviews.length === 0 ? <h6>No reviews yet :(</h6> : <h5>Check out the reviews!</h5>}
      <ListGroup>
        {props.reviews && props.reviews.map(review =>
          <ListGroupItem style={{fontSize: 'xx-large' }} key={review.id}>{review.description}   <Button style={{backgroundColor: 'black'}}onClick={() => handleDelete(review)} className='DeleteButton'>Delete This Review</Button></ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
};

export default connect(null, { deleteReview })(ReviewsList);