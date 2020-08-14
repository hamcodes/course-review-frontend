import React from 'react';
import ReviewInput from '../components/ReviewInput';
import ReviewsList from '../components/ReviewsList';

class Reviews extends React.Component {

    render() {
      return (
        <div>
          <ReviewInput course={this.props.course} />
          <ReviewsList reviews={this.props.course && this.props.course.reviews} />
        </div>
      );
    }
  };

export default Reviews;