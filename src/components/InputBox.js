import React from 'react'

class InputBox extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // Change the message state as a user types in
  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }
  // Once a user press 'enter', format the message and send it out
  handleSubmit(e) {
    e.preventDefault()
    // Format the input string
    this.props.sendQuestion({
      senderName: "You",
      content: this.state.message
    })
    // Clear the message state out after sending out
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form className="input-box" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.message} placeholder="Please type your question and press enter" type="text" />
      </form>
    )
  }
}

export default InputBox
