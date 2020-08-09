import postList from "../data/postList";
import { combineReducers } from "redux";

/* const commentReducer =  */
function comments(state = {}, action) {
  console.log("commentReducer");
  console.log(action.comment);
  console.log(action.postId);

  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment],
        };
      }
    case "LOAD_COMMENTS":
      return action.comments;
    default:
      return state;
  }
}

/* const postReducer =  */
function posts(state = postList, action) {
  console.log("postReducer");

  console.log(action.index);

  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];

    case "ADD_POST":
      return [...state, action.post];

    case "LOAD_POSTS":
      return action.posts;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ posts, comments });

/* export default postReducer;*/
export default rootReducer;
