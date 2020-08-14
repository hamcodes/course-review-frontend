import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const CoursesList = props => {
  
  return (
    <div className='CourseContainer'>
      <Link to='/courses/new' className='NewCourseButton' role='button'>Add A New Course</Link>

    <h3 style={{color: '#BAE5C7', fontWeight: '700', margin: '20px', font: 'cursive' }}>Courses</h3>
      {props.courses.map(course =>
        <Link key={course.id} to={`/courses/${course.id}`}>
          <Card className = 'CourseCard'>
            <CardBody>
              <CardImg className='CourseImage' src={course.image} alt={course.name} />  
              <CardTitle>{course.name} - {course.address}</CardTitle>
            </CardBody>
          </Card>
        </Link>
      )}
    </div>
  );
};

export default CoursesList;