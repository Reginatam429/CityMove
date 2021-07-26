import React from "react";
import { Redirect } from "react-router-dom";

function Submit(props) {
  console.log(props);
  if (props.isRedirecting) {
    props.setIsRedirecting(false);
    return <Redirect push from="/" to="/results" />;
  }
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <button
          disabled={
            props.cityFrom.length === 0 || props.cityTo.length === 0
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Submit;
