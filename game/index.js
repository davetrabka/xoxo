import { Map } from 'immutable'

export default function reducer(state = { turn: 'X', board: Map() }, action) {
  switch (action.type) {
    case 'MOVE':
      if (winner(state.board)) {
        return winner(state.board)
      } else {
        return {
          turn: action.nextTurn,
          board: state.board.setIn(action.coor, action.currTurn),
        }
      }
    default:
      return state
  }
}

export const move = (turn, coor) => {
  const nextTurn = turn === 'X' ? 'O' : 'X'
  return { type: 'MOVE', currTurn: turn, nextTurn: nextTurn, coor: coor }
}

export const streak = (board, coor1, coor2, coor3) => {
  // const first = board.getIn(coor1)
  // const second = board.getIn(coor2)
  // const third = board.getIn(coor3)
  console.log(board.getState())

  // if (!first || !second || !third) return null
  // if (first === 'X' && second === 'X' && third === 'X') return 'X'
  // if (first === 'O' && second === 'O' && third === 'O') return 'O'
  // return 'draw'
}

const winner = board => {
  console.log(board.getState())
  const testResults = [
    // Row winners
    streak(board, [0, 0], [0, 1], [0, 2]),
    streak(board, [1, 0], [1, 1], [1, 2]),
    streak(board, [2, 0], [2, 1], [2, 2]),
    // Column winners
    streak(board, [0, 0], [1, 0], [2, 0]),
    streak(board, [0, 1], [1, 1], [2, 1]),
    streak(board, [0, 2], [1, 2], [2, 2]),
    // Diagnol winners
    streak(board, [0, 0], [1, 1], [2, 2]),
    streak(board, [2, 0], [1, 1], [0, 2]),
  ]

  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i]) return testResults[i]
    else return null
  }
}

/*  
      O _ _
      X O X
      _ _ X

      Map {
        0: Map { 0: "O",       ,        }, 
        1: Map { 0: "X", 1: "O", 2: "X" }, 
        2: Map {       ,       , 2: "X" } 
      }
*/
