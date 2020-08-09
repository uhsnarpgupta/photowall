import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto" />
      {/*   
        <a onClick={props.onNavigate} className="addIcon" href="#AddPhoto" />
    
        <button onClick={props.onNavigate} className="addIcon" />
       */}
      <div className="photoGrid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              {...props}
              index={index}
              // onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  //onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
