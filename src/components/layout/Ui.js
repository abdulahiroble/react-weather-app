import React, { Fragment, Component } from "react";

export class Ui extends Component {
  render() {
    return (
      <Fragment>
        <div className="all-center">
          <h1>{this.props.title}</h1>
          <br />
          <button className="btn btn-dark">{this.props.button}</button>
        </div>
      </Fragment>
    );
  }
}

export default Ui;
