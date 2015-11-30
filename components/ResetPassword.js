var React = require('react');
var Router = require('react-router');

var ResetPassword = React.createClass({

  componentDidMount: function() {
    document.title = "Slowpost - Reset Password";
  },

  getInitialState() {
    return {
      warning: '',
      username: '',
      newPassword: '',
      confirmPassword: ''
    };
  },

  handleChangeForUsername(event) {
    this.setState({warning: ''});
    this.setState({username: event.target.value});
  },

  handleChangeForNewPassword(event) {
    this.setState({warning: ''});
    this.setState({newPassword: event.target.value});
  },

  handleChangeForConfirmPassword(event) {
    this.setState({warning: ''});
    this.setState({confirmPassword: event.target.value});
  },

  handleSubmit(event){

    event.preventDefault();

    // Unfocus the text input field
    this.getDOMNode().querySelector('input').blur();

    // When the form is submitted, call the onPost callback that is passed to the component

    if(this.state.newPassword != this.state.confirmPassword){
      this.setState({warning: "Passwords must match."});
    }
    else {
      this.resetPassword(this.state.newPassword);
    }

  },

  showSuccess(event){
    window.location.href = "#/reset-password/success";
  },

  resetPassword(newPassword){

    var self = this;

    var requestBody = {
      'password': newPassword
    }

    // Post the new password to the Postoffice server for this user
    $.ajax({
      url: "https://production.slowpost.me/reset_password",
      dataType: 'json',
      type: 'POST',
      headers: {"Access-Control-Allow-Credentials": false, "Authorization": "Bearer " + this.props.query.token},
      data: JSON.stringify(requestBody),
      success: function(data) {
        this.showSuccess();
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({warning: "Request expired - try asking to reset your password again!"});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render() {

    return (
      <div className="form-container">
        <form id="password-reset-form" onSubmit={this.handleSubmit}>
  				<div className="form-group">
  					<div className="col-xs-12 col-md-6 col-md-offset-3">
              <h1>Reset Your Password</h1>
  						<div className="input-group">
  							<input type="password" className="form-control" id="new-password" placeholder="Enter new password..."
  							value={this.state.newPassword} onChange={this.handleChangeForNewPassword} />
                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm new password..."
                value={this.state.existingPassword} onChange={this.handleChangeForConfirmPassword} />
                <button type="submit" id="submit-button" className="btn btn-default">Submit</button>
  						</div>
              <label id="warning-label">{this.state.warning}</label>
  					</div>
  				</div>
  			</form>
      </div>
    );

  }

});

module.exports = ResetPassword;
