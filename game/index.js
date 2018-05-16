import { Map } from 'immutable'

export default function reducer(state = { turn: 'X', board: Map() }, action) {
  switch (action.type) {
    case 'MOVE':
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
