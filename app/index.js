var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// properties associated with our Component
// state
// lifecycle event: little hooks that you can tie into so that you know when certain events happen in the component
// UI - Only one that is required
class App extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

// how we invoke a component?
// <App />

// render component to the dom
// Take two arguments 1- what, 2- where
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
