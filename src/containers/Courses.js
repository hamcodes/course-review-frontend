import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchCourses } from '../actions/courseActions';
import CourseInput from '../components/CourseInput';
import CoursesList from '../components/CoursesList';
import CourseShow from '../components/CourseShow';
import PlayedCourses from '../components/PlayedCourses';
import International from '../components/International';

class Courses extends React.Component {
  

  componentDidMount() {
    // console.log('a');

    this.props.fetchCourses()
    // console.log('b');
  }
  
    render() {
      // console.log(this.props);
      
        return (
          <div>
            <Switch>
              <Route path='/courses/new' component={CourseInput} />
              <Route path='/courses/played' render={(routerProps) => <PlayedCourses {...routerProps} courses={this.props.courses} />} />
              <Route path='/courses/international' render={(routerProps) => <International {...routerProps} courses={this.props.courses} />}  />
              <Route path='/courses/:id' render={(routerProps) => <CourseShow {...routerProps} courses={this.props.courses} />} />
              <Route path='/courses' render={(routerProps) => <CoursesList {...routerProps} courses={this.props.courses} />} />
            </Switch>
          </div>
        );
    }


}



const mapStateToProps = state => {
  return {
    courses: state.courses
  }
};

export default connect(mapStateToProps, { fetchCourses })(Courses);