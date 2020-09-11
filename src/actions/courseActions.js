export const fetchCourses = () => {
  console.log('c');
  return (dispatch) => {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(courses => {
      console.log('d');
      return dispatch({
      type: 'FETCH_COURSES',
      payload: courses
    })})
  };
};

export const addCourse = (courseData, history, path) => {
  return (dispatch) => {
    console.log(history);
     fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(courseData)
    })
    .then(res => res.json())
    .then(course => {
      history.push(path)
      dispatch({type: 'ADD_COURSE', payload: course})
    })
  };
};

export const deleteCourse = courseId => {
  return (dispatch) => {
    fetch(`http://localhost:3000/courses/${courseId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(course => {
      dispatch({type: 'DELETE_COURSE', payload: course.id})
    })
  };
};

export const togglePlayed = (course, courseId) => {
  const updatedPlayed = {...course, played: !course.played};

  return (dispatch) => {
    fetch(`http://localhost:3000/courses/${courseId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({course: updatedPlayed})
    })
    .then(res => res.json())
    .then(course => {
      dispatch({type: 'TOGGLE_PLAYED', payload: course})
    })
  };
};

 export const toggleInternational = (course, courseId) => {
  const updatedInternational = {...course, international: !course.international};

  return (dispatch) => {
    fetch(`http://localhost:3000/courses/${courseId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({course: updatedInternational})
    })
    .then(res => res.json())
    .then(course => {
      dispatch({type: 'TOGGLE_INTERNATIONAL', payload: course})
    })
  };
};