import React from "react";
import PropTypes from "prop-types";

GetList.propTypes = {
  all: PropTypes.array,
};
GetList.defaultProps = {
  all: [],
};

function GetList(props) {
  const { all } = props;
  return (
    <ul className="post-l">
      <div className="container">
      <button><h2>Platforms</h2></button>
      {all.map((post) => (
        <>
       <div className="data">
        
          <h4>{post.name}</h4>
          <p>url : {post.url}</p> 
         <p>start_time : {post.start_time}</p>
          <p>end_time : {post.end_time}</p>
          <p>duration : {post.duration}</p>
          <p>site : {post.site}</p>
          <p>in_24_hours : {post.in_24_hours}</p>
          <p>status : {post.status}</p>
          <hr />
        </div>
        </>       
      ))}
      </div>
    </ul>
  );
}

export default GetList;
