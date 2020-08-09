import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removePost,
  addPost,
  addComment,
  startAddingPost,
  startLoadingPost,
  startRemovingPost,
  startAddingComment,
  startLoadingComments,
} from "../redux/actions";
import { withRouter } from "react-router";
import * as actionCreators from "../redux/actions";

function mapStateToProps(state, ownprops) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  //   return bindActionCreators({ removePost }, dispatch);
  console.log(actionCreators);
  return bindActionCreators(
    {
      removePost,
      addPost,
      addComment,
      startAddingPost,
      startLoadingPost,
      startRemovingPost,
      startAddingComment,
      startLoadingComments,
    },
    dispatch
  );

  //return bindActionCreators({ actionCreators }, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
