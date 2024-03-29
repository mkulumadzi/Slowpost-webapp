var React = require('react');

var SuccessfulPasswordReset = React.createClass({

  componentDidMount: function() {
    document.title = "Slowpost - Password Reset Successfully";
  },

  render() {

    return (
      <div>
        <div className="centered">
          <div className="container">
            <h1>Success!</h1>
            <p>Your password has been reset - try logging in again.</p>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = SuccessfulPasswordReset;
