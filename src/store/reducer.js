const defaultState = {
  inputValue: 'test',
  list: [],
}

export default (state = defaultState, action) => {
  let newState
  switch(action.type){
    case 'change_input_value':
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case 'add_item':
      newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case 'delete_item':
      newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.value, 1)
      return newState
    default:
      return state
  }
}