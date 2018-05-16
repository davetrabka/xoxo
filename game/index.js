import {Map} from 'immutable'
// import { createStore } from "redux"

export default function reducer(state = { turn: 'X', board: Map() }, action) {
  switch (action.type) {
    case 'START':
      return {}
    case 'MOVE'
      return 
    default: 
      return state
  }
}

const move = (turn, coor) => {
  const nextTurn = turn === 'X' ? 'O' : 'X'
  return {type: 'MOVE', turn: nextTurn}
}