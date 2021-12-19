import React from "react";
import "./post.css";

export default function Post(props) {
  console.log(props);
  return (
    <div className="post-container">
      <div className="post-left"></div>
      <div className="post-right">
        <div className="post-header">
          <h2 className="post-heading">Demo Heading</h2>
        </div>
        <div className="post-content">
          <p className="post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna
            ex, vehicula eu rutrum eu, luctus posuere turpis. Nam facilisis
            tellus nec erat viverra semper. Quisque scelerisque tempus nunc ut
            pharetra. Vivamus et finibus turpis.
          </p>
        </div>
      </div>
    </div>
  );
}
