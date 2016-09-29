import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>

        <h1>IceBank</h1>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default App;
