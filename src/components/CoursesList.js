import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import SortButton from './SortButton';

class CoursesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
    this.sortButton = this.sortButton.bind(this)
  }
  

    sortButton() { 
    this.setState ({
      courses: this.props.courses.slice().sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)     
    })};
    
  render() { 
    
    const courses = this.state.courses.length === 0 ? this.props.courses : this.state.courses
    
       return (         
        <div className='CourseContainer'>
          <Link to='/courses/new' className='NewCourseButton' role='button'>Add A New Course</Link>
          {/* <button onClick={this.sortButton}>Sort</button> */}
    
        <h3 style={{color: '#BAE5C7', fontWeight: '700', margin: '20px', font: 'cursive' }}>Courses</h3>
          {courses.map(course =>
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
        
      )
    } 
    
}


export default CoursesList;