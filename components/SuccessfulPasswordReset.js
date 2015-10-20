var React = require('react');

var SuccessfulPasswordReset = React.createClass({

  render() {

    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h3>Success!</h3>
            <p>Your password has been reset - try logging in again.</p>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = SuccessfulPasswordReset;
