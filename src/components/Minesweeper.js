import React, { Component } from 'react'

class Minesweeper extends Component {
  componentDidMount() {
    fetch('https://minesweeper-api.herokuapp.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ difficulty: 0 })
    })
      .then(resp => {
        return resp.json()
      })
      .then(game => {
        console.log({ game })
      })
  }

  render() {
    return <div />
  }
}
// make grid
//  rows/columns
// make table to call each array
export default Minesweeper
