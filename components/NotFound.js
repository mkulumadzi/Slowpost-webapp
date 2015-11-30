var React = require('react');

var NotFound = React.createClass({

  componentDidMount: function() {
    document.title = "Error - Page Not Found";
  },

  render() {

    return (
      <div className="centered">
        <h1>Sorry, we could&#39;t find what you are looking for...</h1>
        <img className="app-icon" src="assets/slowpost-icon-upsidedown.png" alt="Something went wrong."/>
      </div>
    );

  }

});

module.exports = NotFound;
