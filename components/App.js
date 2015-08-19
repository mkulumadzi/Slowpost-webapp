var React = require('react');

var PasswordReset = require('./PasswordReset');

var App = React.createClass({

  getInitialState(){

    return null;

  },


  submitPasswordReset(username, password){

    var self = this;

    // Post the new password to the Postoffice server for this user

  },

  render(){

    return (

      <div>
        <h1>Reset Password</h1>

        <PasswordReset onPost={this.submitPasswordReset} />

      </div>

    );
  }

});

module.exports = App;
