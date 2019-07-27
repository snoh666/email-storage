export const initialState = () => {
  let state = JSON.parse(localStorage.getItem('list'));

  return state === null ? {password: false, list: []} : state;
}
const reducer = (state, action) => {
  const { type, body } = action;
  switch(type) {
    case 'SET_PASSWORD':
      localStorage.setItem('list', JSON.stringify({
        password: body,
        list: [...state.list]
      }));
      return {
        password: body,
        list: [...state.list]
      };
    case 'ADD_ITEM':
      localStorage.setItem('list', JSON.stringify({
        password: state.password,
        list: [body, ...state.list]
      }));
      return {
        password: state.password,
        list: [body, ...state.list]
      };
    case 'DELETE_ITEM':
      localStorage.setItem('list', JSON.stringify({
        password: state.password,
        list: state.list.filter(value => value.id !== body.id ? value : null)
      }));
      return {
        password: state.password,
        list: state.list.filter(value => value.id !== body.id ? value : null)
      };
    default:
      throw new Error()

  }

}

export default reducer;