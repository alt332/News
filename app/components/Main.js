import React from 'react';
import Nav from './partials/Nav';

class Main extends React.Component {
  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default Main;
