import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { removePost } from "../redux/actions";
import { Link } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  /*  componentDidMount() {
    this.props.removePost(1);
  } */

  /*
  introduced to fix crash when reloading of single component page occurs, it says id not found as posts are not loaded; 
  it is called component state
  */
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    // console.log(this.state.posts);
    //console.log(this.props.posts);
    console.log(this.props);

    return (
      <div>
        <h1 className="font-face">
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              {/* <Title title={"Photowall"} /> */}
              {/* <PhotoWall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
                onNavigate={this.navigate}
              /> */}
              {/*               <PhotoWall posts={this.props.posts} />
               */}
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        {/*         <Route path="/AddPhoto" component={AddPhoto} />
         */}

        <Route
          path="/AddPhoto"
          render={(history) => (
            /* <AddPhoto
              onAddPhoto={(addedPost) => {
                console.log(addedPost);
                this.addPhoto(addedPost);
                history.push("/");
              }}
            /> */
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={(params) => (
            <Single loading={this.state.loading} {...this.props} {...params} />
          )}
        />
      </div>
    );
  }

  /* removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  } */

  navigate() {
    this.setState({
      screen: "addPhoto",
    });
  }

  /* addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted]),
    }));
  } */
}

/* function mapStateToProps(state) {
  return {
    posts: state,
  };
} */

// export default connect(mapStateToProps)(Main);
export default Main;
