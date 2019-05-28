import React, { Component } from 'react'

class Minesweeper extends Component {
  state = {
    game: { board: [] }
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
          game
        })
        console.log(game)
      })
  }

  gridClick = (row, col) => {
    console.log('clicked', { row, col })
    fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.game.id}/check`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ row: row, col: col })
      }
    )
      .then(resp => {
        return resp.json()
      })
      .then(updatedGame => {
        this.setState({ game: updatedGame })
        console.log({ game: updatedGame })
      })
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.game.board.map((row, i) => {
              return (
                <tr className="row" key={i}>
                  {row.map((col, j) => {
                    return (
                      <td
                        key={j}
                        className="column"
                        onClick={() => this.gridClick(i, j)}
                      >
                        {this.state.game.board[i][j]}
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
