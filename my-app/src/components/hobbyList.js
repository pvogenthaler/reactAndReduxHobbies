import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Hobby} from './hobby.js';

class HobbyList extends React.Component {

  render() {
    return (
      <div className="hobbyListContainer">
        <h3>My Hobbies ({this.props.hobbies.length})</h3>
        <ul>
          {this.props.hobbies.map(hobby =>
            <Hobby
              key={hobby.id}
              {...hobby}
            />
          )}
        </ul>
      </div>
    );
  }

}

HobbyList.propTypes = {
  hobbies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const mapStateToProps = (state) => ({
  hobbies: state.hobbies
});

module.exports.HobbyList = connect(mapStateToProps)(HobbyList);
