import { Map } from 'immutable'

export default function reducer(state = { turn: 'X', board: Map() }, action) {
  console.log(state.board)
  switch (action.type) {
    case 'MOVE':
      // winner(state.board)
      return {
        turn: action.nextTurn,
        board: state.board.setIn(action.coor, action.currTurn),
      }
    default:
      return state
  }
}

export const move = (turn, coor) => {
  const nextTurn = turn === 'X' ? 'O' : 'X'
  return { type: 'MOVE', currTurn: turn, nextTurn: nextTurn, coor: coor }
}

const streak = (board, coor1, coor2, coor3) => {
  // Loop through board

  if (board[coor1] === '_' || board[coor2] === '_' || board[coor3] === '_')
    return null
  if (board[coor1] === 'X' && board[coor2] === 'X' && board[coor3] === 'X')
    return 'X'
  if (board[coor1] === 'O' && board[coor2] === 'O' && board[coor3] === 'O')
    return 'O'

  return 'draw'
}

const winner = board => {
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
