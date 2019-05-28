import React, { Component } from 'react'

class Cell extends Component {
  render() {
    let rv = <>{this.props.value}</>
    if (this.props.value === '*') {
      rv = (
        <>
          <span>💣</span>
        </>
      )
    } else if (this.props.value === 'F') {
      rv = (
        <>
          <span>🚩</span>
        </>
      )
    }
    return rv
  }
}

export default Cell
