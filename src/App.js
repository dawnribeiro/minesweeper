import React, { Component } from 'react'
import Header from './components/Header'
import Minesweeper from './components/Minesweeper'
import Cell from './components/Cell'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="board">
          <Minesweeper />
        </section>
      </div>
    )
  }
}

export default App
