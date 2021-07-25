import React from "react";
import { Link } from "react-router-dom";

function Submit(props) {
  return (
    <div>
      {/* <Link to='/results'>    */}
      <form onSubmit={props.handleSubmit}>
        <button>Submit</button>
      </form>
      {/* </Link>  */}
    </div>
  );
}

export default Submit;
