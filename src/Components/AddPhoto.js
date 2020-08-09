import React, { Component } from "react";
import PropTypes from "prop-types";
import serializeForm from "form-serialize";

class AddPhoto extends Component {
  /* constructor() {
    super();
  } */

  handleSubmit = (e) => {
    e.preventDefault();
    const imageLink = e.target.elements.imageLink.value;
    const description = e.target.elements.description.value;

    /* const values = serializeForm(e.target, { hash: true });
    if (values["imageLink"] && values["description"]) {
      values.id = Number(new Date());
      this.props.addPost(values.id, values.imageLink, values.description);
      this.props.history.push("/");
    } */

    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (imageLink && description) {
      //this.props.onAddPhoto(post);
      //this.props.addPost(post);
      this.props.startAddingPost(post);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="add-post">
        <div className="form" onSubmit={this.handleSubmit}>
          <form className="add-form">
            <input name="imageLink" placeholder="Link" />
            <input name="description" placeholder="Description" />
            <button>Post</button>
          </form>
        </div>
      </div>

      /* <div>
        <h1> Photos </h1> 
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button> Post </button>
          </form>
        </div>
      </div> */
    );
  }
}

/* AddPhoto.propTypes = {
  addPost: PropTypes.func.isRequired,
}; */

export default AddPhoto;
