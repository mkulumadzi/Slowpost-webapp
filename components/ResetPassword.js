var React = require('react');

var ResetPassword = React.createClass({

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

  resetPassword(newPassword){

    var self = this;

    var requestBody = {
      'password': newPassword
    }

    // Post the new password to the Postoffice server for this user
    $.ajax({
      url: "http://localhost:9292/reset_password",
      dataType: 'json',
      type: 'POST',
      headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjU1ZDYyNWM0NTlmNDQ0MGQ4YTAwMDAwMCIsImV4cCI6MTQ0MDE5NDcyOCwic2NvcGUiOiJyZXNldC1wYXNzd29yZCJ9.pBB3pSKi6fxLmFETOPyhNk2vsPmKP0rb_NpxoGHBnGI8IlYYK8Z56ZD14x7jHrHeXoG6TbTT5krfQAQMPljG1B1iGvNCbZhkaJVKERpwQr0mK8U5RE0Xbv-oG4w0VM06oB87twMhrtJuvF1TRx3L62vH0gofzai3M3H1I4Gzdz17a-Fp0kqeUoSLmqLi5x7xHTS5HFttVt0pv2HesGPLTnJS_DiEQHlV9WgMbYobF89okRdnQc2uSSNucN1A3ZKl4JXe8u90zvXHhanA8_yYAvprf-NQkOqCbhnm7HL933tbG6gGhoF_SNqSn6LfOpgsoWrkRuZ43kdurty1Bayprw"},
      data: JSON.stringify(requestBody),
      success: function(data) {
        console.log("Password changed successfully!")
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render() {

    return (
      <div>
      <h1>Reset Password</h1>
      <form id="password-reset-form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
              <label id="warning-label">{this.state.warning}</label>
							<input type="text" className="form-control" id="new-password" placeholder="Enter new password..."
							value={this.state.newPassword} onChange={this.handleChangeForNewPassword} />
              <input type="text" className="form-control" id="confirm-password" placeholder="Confirm new password..."
              value={this.state.existingPassword} onChange={this.handleChangeForConfirmPassword} />
              <button type="submit" id="submit-button" class="btn btn-default">Submit</button>
						</div>
					</div>
				</div>
			</form>
      </div>
    );

  }

});

module.exports = ResetPassword;
