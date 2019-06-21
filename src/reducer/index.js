const initialState = [];
users=[];
const listReducer = (state = initialState, action) => {
  if (action.type === "ADD_USERS") {
    return Object.assign({}, state, {
        users: state.users.concat(action.payload),
        
    });
  }
}

export default listReducer;
