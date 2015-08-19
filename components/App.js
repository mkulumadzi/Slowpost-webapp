var React = require('react');

var PasswordReset = require('./PasswordReset');

var App = React.createClass({

  getInitialState(){

    return null;

  },


  submitPasswordReset(username, newPassword){

    var self = this;

    var requestBody = {
      "username": username,
      "password": newPassword
    }

    // Post the new password to the Postoffice server for this user
    $.ajax({
      url: "https://postoffice-testing.herokuapp.com/reset_password",
      dataType: 'json',
      type: 'POST',
      data: requestBody,
      success: function(data) {
        console.log("Password changed successfully!")
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

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
