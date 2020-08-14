import React from 'react';
import { Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';



class CourseCard extends React.Component {

  state = {
    likes: 0
  }

  countLikes = () =>  {
    this.setState ({
      likes: this.state.likes + 1
    })
  }

  callApi = () => {
    console.log('a')
    fetch(`http://localhost:3000/courses/1`)
      .then(res => {
        console.log(res)
        if (!res.ok) {
          throw new Error(res.statusText)
        } else {
          console.log('b')
          return res.json()
        }
      })
      .then(course => console.log('c', course))
      .catch(error => console.log('d', error))
      console.log('e')

      // 'a', 'e', 'd'
  }

  render () {
    let {course} = this.props
    return (
      <Card className = 'CourseCard'>
        <CardBody>
          <CardTitle>{course.name} - {course.address}</CardTitle>
          <CardImg className='CourseImage' src={course.image} alt={course.name} />
          <Button onClick={this.countLikes}>Like: {this.state.likes}</Button>
          <Button onClick={this.callApi}>Call API</Button>
        </CardBody>
      </Card>
    )
  }


}

export default CourseCard;