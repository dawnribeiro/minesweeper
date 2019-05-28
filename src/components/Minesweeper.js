import React, { Component } from 'react'
import Cell from './Cell'

class Minesweeper extends Component {
  state = {
    game: { board: [] },
    message: ''
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
      .then(updateGame => {
        let message = ''
        if (updateGame.state === 'lost') {
          message = 'LOSER'
        } else if (updateGame.state === 'won') {
          message = 'WINNER'
        }
        this.setState({ game: updateGame, message })
      })
  }
  rightClickEvent = (event, row, col) => {
    event.preventDefault()
    fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.game.id}/flag`,
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
      .then(updateGame => {
        this.setState({ game: updateGame })
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
                        onContextMenu={event =>
                          this.rightClickEvent(event, i, j)
                        }
                      >
                        <Cell value={this.state.game.board[i][j]} />
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <h1 className="message">{this.state.message}</h1>
        <div />
      </div>
    )
  }
}
// make grid
//  rows/columns
// make table to call each array
export default Minesweeper
