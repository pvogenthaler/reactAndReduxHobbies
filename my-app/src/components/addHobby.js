import React from 'react';
import {connect} from 'react-redux';
import {addHobby} from '../actions';

class AddHobby extends React.Component {

  render() {
    let input;

    return (
      <form className="hobbyForm" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return;
        }
        this.props.dispatch(addHobby(input.value));
        input.value = '';
      }}>
        <input className="hobbyInput" ref={node => {
          input = node;
        }}
      />
        <input className="hobbySubmit" type="submit" value="Add"/>
      </form>
    );
  }

}

module.exports.AddHobby = connect()(AddHobby);;
