var React = require('react');

var PasswordReset = require('./PasswordReset');

var App = React.createClass({

  getInitialState(){

    return null;

  },


  submitPasswordReset(newPassword){

    var self = this;

    var requestBody = {
      'password': newPassword
    }

    // Post the new password to the Postoffice server for this user
    $.ajax({
      url: "http://localhost:9292/reset_password",
      dataType: 'json',
      type: 'POST',
      headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjU1ZDYyNWM0NTlmNDQ0MGQ4YTAwMDAwMCIsImV4cCI6MTQ0MDE5MzQ2Mywic2NvcGUiOiJyZXNldC1wYXNzd29yZCJ9.0T5rMrNqjdwMzvGts7qMKJdamZCYK2hXZkN71BcguP_-0tMmbqNAs9FD1BT3jb1GDHc-QN4EARKj6dQjdrYM8T4QMPGdZ4hQoPdEFh3KWKPm42XIKIpVNyLiZ1wg3mRKfiJ0joMK_rvuWS-Zfm1WqlQkmfdv9tawH3NPAPxhzmgGRjAOrM4UJYwbvVBsbeD68EAAOUCy_nLypLE2d37bxiwL3It9mv86siwtzbybqOwCgcRKVhN3FxiaHp3eH-M6HIjsjV3NkHC_0YPyvsVy4ua-bwxc9Jzd4DLqM55ws03u2YDSNd439bRSAsj6l2-DxY3DbDxLAmt-lsrVe9AiwA"},
      data: JSON.stringify(requestBody),
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
