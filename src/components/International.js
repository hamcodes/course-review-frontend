import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const International = props => {

  return (
    <div className='CourseContainer'>
      <h3 style={{fontWeight: '700', color: '#bae5c7'}}>International Courses</h3>

      {props.courses.map(course => {
        if (course.international === true) {
          return (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <Card key={course.id} className = 'CourseCard'>
                <CardBody>
                  <CardTitle>{course.name} - {course.address}</CardTitle>
                  <CardImg className='CourseImage' src={course.image} alt={course.name} />
                </CardBody>
              </Card>
            </Link>
          )
        } else {
          return (
            null
          )
        }
      })}
    </div>
  );
};

export default International;