var React = require('react');
var Router = require('react-router');

var ValidateEmail = React.createClass({

  getInitialState() {
    return {
      status: '',
      message: ''
    };
  },

  showSuccess(event){
    this.setState({status: 'Success!'});
    this.setState({message: 'Your email address has been validated. Enjoy Slowpost!'});
  },

  showError(event){
    this.setState({status: 'Error :('})
    this.setState({message: 'Your request was invalid.'});
  },

  validateEmail(){

    var self = this;

    // Post the new password to the Postoffice server for this user
    $.ajax({
      url: "https://production.slowpost.me/validate_email",
      dataType: 'json',
      type: 'POST',
      headers: {"Access-Control-Allow-Credentials": false, "Authorization": "Bearer " + this.props.query.token},
      data: null,
      success: function(data) {
        this.showSuccess();
      }.bind(this),
      error: function(xhr, status, err) {
        this.showError();
      }.bind(this)
    });

  },

  componentDidMount() {
    this.validateEmail();
  },

  render() {

    return (
      <div>
        <div className="centered">
          <div className="container">
            <h1>{this.state.status}</h1>
            <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = ValidateEmail;
