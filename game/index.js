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
  if (!board[coor1] && !board[coor2] && !board[coor3]) return 'ongoing'
  if (board[coor1] === 'X' && board[coor2] === 'X' && board[coor3] === 'X')
    return 'X'
  if (board[coor1] === 'O' && board[coor2] === 'O' && board[coor3] === 'O')
    return 'O'

  return 'draw'
}

const winner = board => {
  if ('X wins') return 'X'
  if ('O wins') return 'O'
  if ('ongoing') return null
  if ('draw') return 'draw'
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
