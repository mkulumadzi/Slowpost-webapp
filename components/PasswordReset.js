var React = require('react');

var PasswordReset = React.createClass({

  // var username = "";
  // var newPassword = "";
  // var confirmPassword = "";

  getInitialState() {
    return {
      username: '',
      newPassword: '',
      confirmPassword: ''
    };
  },

  handleChangeForUsername(event) {
    this.setState({username: event.target.value});
  },

  handleChangeForNewPassword(event) {
    this.setState({newPassword: event.target.value});
  },

  handleChangeForConfirmPassword(event) {
    this.setState({confirmPassword: event.target.value});
  },

  handleSubmit(event){

    event.preventDefault();

    // When the form is submitted, call the onPost callback that is passed to the component
    this.props.onPost(this.state.username, this.state.newPassword);

    // Unfocus the text input field
    this.getDOMNode().querySelector('input').blur();

  },

  render() {

    return (
      <form id="password-reset-form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
              <input type="text" className="form-control" id="username" placeholder="Enter username..."
              value={this.state.username} onChange={this.handleChangeForUsername} />
							<input type="text" className="form-control" id="new-password" placeholder="Enter new password..."
							value={this.state.newPassword} onChange={this.handleChangeForNewPassword} />
              <input type="text" className="form-control" id="confirm-password" placeholder="Confirm new password..."
              value={this.state.existingPassword} onChange={this.handleChangeForConfirmPassword} />
						</div>
            <button type="submit" class="btn btn-default">Submit</button>
					</div>
				</div>
			</form>
    );

  }

});

module.exports = PasswordReset;
