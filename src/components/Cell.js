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
    // else if (this.props.value === '_') {
    //   rv = <div style={{ backgroundColor: `#015677`, height: `100%` }}> </div>
    // }
    // else if (this.props.value === 1) {
    //   rv = <div style={{ backgroundColor: `#ffdc00`, height: `100%` , color: `black`}}> </div>
    // }

    return rv
  }
}

export default Cell
