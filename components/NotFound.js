var React = require('react');

var NotFound = React.createClass({

  componentDidMount: function() {
    document.title = "Error - Page Not Found";
  },

  render() {

    return (
      <div>
      </div>
    );

  }

});

module.exports = NotFound;
