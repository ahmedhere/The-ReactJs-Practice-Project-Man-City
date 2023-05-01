import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <div>
        Hello jani
        {this.props.children}
      </div>
    );
  }
}
