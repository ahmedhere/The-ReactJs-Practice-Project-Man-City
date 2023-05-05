import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import { Animate } from "react-move";

export default class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#98c5e9",
        left: 120,
        rotate: 25,
        top: -260,
        delay: 0,
      },
      {
        background: "#ffffff",
        left: 360,
        rotate: 25,
        top: -397,
        delay: 200,
      },
      {
        background: "#98c5e9",
        left: 600,
        rotate: 25,
        top: -498,
        delay: 400,
      },
    ],
  };
  showStripes = () =>
    this.state.stripes.map((strip, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: "#ffffff",
          opacity: 0,
          left: 0,
        }}
        enter={{
          background: [strip.background],
          opacity: [1],
          left: [strip.left],
          timing: { delay: 500, duration: 200, ease: easePolyOut },
        }}
      >
        {({ opacity, left, background }) => {
          return (
            <div
              className="stripe"
              style={{
                background,
                opacity,
                transform: `rotate(0deg) translate(${left}, 0px)`,
              }}
            ></div>
          );
        }}
      </Animate>
    ));

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}
