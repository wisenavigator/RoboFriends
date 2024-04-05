import React from "react";

class Card extends React.Component {
  render() {
    return (
      //add border and styling to the below div

      <div className="bg-light-green dib br3 pa3 ma2 grow">
        <img src="https://robohash.org/test?200x200" alt="robots" />
        <h2>{this.props.fullName}</h2>
        <h3>{this.props.email}</h3>
      </div>
    );
  }
}
export default Card;
