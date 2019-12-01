import React from 'react'

class ComposeBox extends React.Component {
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
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form className="compose-box" onSubmit={this.handleSubmit}>
        <input disabled={this.props.disabled} onChange={this.handleChange}
          value={this.state.message} placeholder="Enter question" type="text"/>
      </form>
    )
  }
}

export default ComposeBox
