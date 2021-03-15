import { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

class Persons extends Component {
  render() {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: 'Tom',
      age: Math.floor(Math.random() * 40),
    };
    return (
      <div>
        <AddPerson personAdded={() => this.props.onPersonAdded(newPerson)} />
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
    onPersonAdded: (newPerson) =>
      dispatch({
        type: actionTypes.ADD_PERSON,
        newPerson: newPerson,
      }),
    onPersonRemoved: (personId) =>
      dispatch({
        type: actionTypes.REMOVE_PERSON,
        personId: personId,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
