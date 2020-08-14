const courseReducer = (state = { courses: [] }, action) => {

  switch (action.type) {

    case 'FETCH_COURSES':
      return {...state, courses: action.payload};

    case 'ADD_COURSE':
      return {...state, courses: [...state.courses, action.payload]};

    case 'DELETE_COURSE':
      const filteredCourses = state.courses.filter(course => course.id !== action.payload)
      return {...state, courses: filteredCourses}

    case 'TOGGLE_PLAYED':
    case 'TOGGLE_INTERNATIONAL':
      const course = state.courses.map(course => {
        if (course.id !== action.payload.id) {
          return course
        } else {
          return action.payload
        }
      })
      return {...state, courses: course}

    case 'ADD_REVIEW':
      const addReviewCourse = state.courses.map(course => {
        if (course.id === action.payload.id) {
          return action.payload
        } else {
          return course
        }
      })
      return {...state, courses: addReviewCourse}

    case 'DELETE_REVIEW':
      const deleteReviewCourse = state.courses.map(course => {
        if (course.id === action.payload.id) {
          return action.payload
        } else {
          return course
        }
      })
      return {...state, courses: deleteReviewCourse}

    default:
      return state;
  }
}

export default courseReducer;