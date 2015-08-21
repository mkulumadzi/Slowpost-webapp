var React = require('react');

var RequestPasswordReset = React.createClass({

  getInitialState() {
    return {
      email: ''
    };
  },

  handleChange(event) {
    this.setState({email: event.target.value});
  },

  handleSubmit(event){

    event.preventDefault();

    // Unfocus the text input field
    this.getDOMNode().querySelector('input').blur();

    // When the form is submitted, call the onPost callback that is passed to the component
    this.requestPasswordReset(this.state.email);

  },

  requestPasswordReset(email){

    var self = this;

    var requestBody = {
      'email': email
    }

    // Post the new password to the Postoffice server for this user
    $.ajax({
      url: "http://localhost:9292/request_password_reset",
      dataType: 'json',
      type: 'POST',
      headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6IjU1ZDYyNWM0NTlmNDQ0MGQ4YTAwMDAwMCIsImV4cCI6MTQ0MDE5NDcyOCwic2NvcGUiOiJyZXNldC1wYXNzd29yZCJ9.pBB3pSKi6fxLmFETOPyhNk2vsPmKP0rb_NpxoGHBnGI8IlYYK8Z56ZD14x7jHrHeXoG6TbTT5krfQAQMPljG1B1iGvNCbZhkaJVKERpwQr0mK8U5RE0Xbv-oG4w0VM06oB87twMhrtJuvF1TRx3L62vH0gofzai3M3H1I4Gzdz17a-Fp0kqeUoSLmqLi5x7xHTS5HFttVt0pv2HesGPLTnJS_DiEQHlV9WgMbYobF89okRdnQc2uSSNucN1A3ZKl4JXe8u90zvXHhanA8_yYAvprf-NQkOqCbhnm7HL933tbG6gGhoF_SNqSn6LfOpgsoWrkRuZ43kdurty1Bayprw"},
      data: JSON.stringify(requestBody),
      success: function(data) {
        console.log("Password reset request submitted successfully!")
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },

  render() {

    return (
      <div>
      <h1>Request Password Resest</h1>
      <form id="request-password-reset-form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
              <input type="text" className="form-control" id="email" placeholder="Enter email address..."
              value={this.state.email} onChange={this.handleChange} />
              <button type="submit" id="submit-button" class="btn btn-default">Submit</button>
						</div>
					</div>
				</div>
			</form>
      </div>
    );

  }

});

module.exports = RequestPasswordReset;
