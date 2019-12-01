import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import './MessageBoard.css';

const DATA = [
  {
    senderId: 'jack',
    text: 'Morning'
  },
  {
    senderId: 'joe',
    text: 'Hi,'
  }
]

class MessageBoard extends React.Component {

  render() {
    return (
      <div className="Message-board">
        {
          DATA.map((message, index) => {
            return (
              <Message key={index} senderName={message.senderId} content={message.text} />
            )
          })
        }
      </div>
    )
  }
}

export default MessageBoard
