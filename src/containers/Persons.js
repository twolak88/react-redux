import { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdded} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonRemoved(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdded: (name, age) =>
      dispatch({
        type: actionTypes.ADD_PERSON,
        personData: {name: name, age: age},
      }),
    onPersonRemoved: (personId) =>
      dispatch({
        type: actionTypes.REMOVE_PERSON,
        personId: personId,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
