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

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    // Format the input string
    this.props.sendQuestion({
      senderName: "You",
      content: this.state.message
    })
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form className="input-box" onSubmit={this.handleSubmit}>
        <input disabled={this.props.disabled} onChange={this.handleChange}
          value={this.state.message} placeholder="Type your question and press enter" type="text" />
      </form>
    )
  }
}

export default InputBox
