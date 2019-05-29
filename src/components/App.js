import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { getPersons } from "../actions/personActions";

const mapStateToProps = state => {
  return { persons: state.persons };
};

class App extends Component {
  componentDidMount() {
    this.props.getPersons();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }

  render() {
    return <Container>"asdasdas"</Container>;
  }
}

export default connect(
  mapStateToProps,
  { getPersons }
)(App);
