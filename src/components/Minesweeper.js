import React, { Component } from 'react'

class Minesweeper extends Component {
  state = {
    board: []
  }

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
        this.setState({
          board: game.board
        })
        console.log(game.board)
      })
  }

  render() {
    return (
      <div className="game-container">
        <table>
          <tbody>
            {this.state.board.map((row, i) => {
              return (
                <tr className="row" key={i}>
                  {row.map((column, j) => {
                    return (
                      <td className="column" key={j}>
                        {this.state.board[i][j]}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
// make grid
//  rows/columns
// make table to call each array
export default Minesweeper
