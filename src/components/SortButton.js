import React from 'react';


class SortButton extends React.Component {
  // state = {
  //   count: 0
  // }

  // incrementMe = () => {
  //   let newCount = this.state.count + 1
  //   this.setState({
  //     count: newCount
  //   })
  // }

  render() {
    return (
      <div>
        <button onClick={this.sort}>Sort </button>
      </div>
    )
  }
}

export default SortButton;