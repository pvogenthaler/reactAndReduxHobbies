import React from 'react';

class AddHobby extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="hobbyForm">
        <input type="text" value={this.state.value} onChange={this.handleChange} className="hobbyInput"/>
        <input type="submit" value="Add" className="hobbySubmit" />
      </form>
    );
  }
}

module.exports.AddHobby = AddHobby;
