import React, { PropTypes } from 'react';

class Hobby extends React.Component {

  render() {
    return (
      <li>{this.props.text}</li>
    );
  }
  
}

Hobby.propTypes = {
  text: PropTypes.string.isRequired
}

module.exports.Hobby = Hobby;
