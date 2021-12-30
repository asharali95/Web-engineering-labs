import React, { Component } from "react";

export default class StudentList extends Component {
  render() {
    return (
      <>
        <tr onClick={(e) => this.props.changeFunction(e)} id={this.props.name}>
          <td>{this.props.name}</td>
        </tr>
      </>
    );
  }
}
