import React from "react";
import { Link } from "react-router-dom";
import Citylogo from "../../Resources/images/logos/manchester_city_logo.png";

const CITYLOGO = (props) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${Citylogo}) no-repeat`,
      }}
    ></div>
  );
  if (props.link) {
    return (
      <Link to={props.linkTo} className="link logo">
        {template}
      </Link>
    );
  } else {
    return template;
  }
};

export default CITYLOGO;
