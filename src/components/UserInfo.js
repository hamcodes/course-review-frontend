import React from 'react'



class UserInfo extends React.Component {
  state = {
    points: 0
  }

  increment = () => {
    let newPoints = this.state.points + 1
    this.setState({
      points: newPoints
    })
  }


  render() {

    return (
      <div>
        <h1>{this.props.username}</h1>
        <h1>{this.props.email}</h1>
        <h1>{this.state.points}</h1>
        <button onClick={this.increment}>Like</button>
      </div>
    );
    }
}

export default UserInfo;






// card that shows user name and email
// the name and email will come from app component
// coming from the app component, need to pass down name and email as props to this component
//needs a point attribute that can render under email
//focus on react
//making class and function components
//rendering items, passing props
//using setState
//events, buttons that change state, like increment