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
