export const addReview = (review, courseId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/courses/${courseId}/reviews`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(course => {
      dispatch({type: 'ADD_REVIEW', payload: course})
    })
  };
};

export const deleteReview = (reviewId, courseId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/courses/${courseId}/reviews/${reviewId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(course =>
      dispatch({type: 'DELETE_REVIEW', payload: course})
    )
  };
};