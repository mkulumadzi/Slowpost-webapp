var React = require('react');

var PasswordReset = React.createClass({

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
      this.props.onPost(this.state.username, this.state.newPassword);
    }

  },

  render() {

    return (
      <form id="password-reset-form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
              <label id="warning-label">{this.state.warning}</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username..."
              value={this.state.username} onChange={this.handleChangeForUsername} />
							<input type="text" className="form-control" id="new-password" placeholder="Enter new password..."
							value={this.state.newPassword} onChange={this.handleChangeForNewPassword} />
              <input type="text" className="form-control" id="confirm-password" placeholder="Confirm new password..."
              value={this.state.existingPassword} onChange={this.handleChangeForConfirmPassword} />
              <button type="submit" id="submit-button" class="btn btn-default">Submit</button>
						</div>
					</div>
				</div>
			</form>
    );

  }

});

module.exports = PasswordReset;
