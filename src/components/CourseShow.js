import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import Reviews from '../containers/Reviews';
import { deleteCourse, togglePlayed, toggleInternational } from '../actions/courseActions';


const CourseShow = props => {

  let course = props.courses.filter(course => course.id == props.match.params.id)[0];

  const handleDelete = () => {
    props.deleteCourse(course.id);
    const path = `/courses`;
    props.history.push(path);
  };

  const handlePlayed = () => {
    props.togglePlayed(course, course.id)
  }

  const handleInternational = () => {
    props.toggleInternational(course, course.id)
  }

  return (
    <div>
      <Card className = 'CourseShow'>
      <CardBody>
          <CardTitle>{course && course.name} <br/>
          {course && course.address}</CardTitle>
          <CardImg className='CourseImage' src={course && course.image} alt={course && course.name} /><br></br>
        </CardBody>
        <Button onClick={handlePlayed} className='PlayedButton' style={{alignItems: 'center' }}>
          {course && course.played === false ? 'Add to Played' : 'Remove from played courses'}
        </Button>
        <Button onClick={handleInternational} className='InternationalButton'>
          {course && course.international === false ? 'Was this an international course?' : 'Remove from international'}
        </Button>
        <Button onClick={handleDelete} className='DeleteButton'>Delete This Course</Button>
      </Card><br/>

      <Reviews course={course} />

    </div>
  );
};

export default connect(null, { deleteCourse, togglePlayed, toggleInternational })(CourseShow);