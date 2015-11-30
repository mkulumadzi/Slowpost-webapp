var React = require('react');

var Contact = React.createClass({

  componentDidMount: function() {
    document.title = "Slowpost - Contact Us";
  },

  render() {

    return (
      <div>
        <div className="centered">
          <h1>We would love to hear from you!</h1>
          <p>Send any feedback about the app to <a href="mailto:feedback@slowpost.me" className="link">feedback@slowpost.me</a></p>
          <p>Send support requests to <a href="mailto:support@slowpost.me" className="link">support@slowpost.me</a></p>
          <img className="app-icon" src="assets/slowpost-icon.png" alt="Slowpost icon"/>
        </div>
      </div>
    );

  }

});

module.exports = Contact;
