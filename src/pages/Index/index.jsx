import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return <section className="main-container">Ban The Bad</section>;
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(App);
