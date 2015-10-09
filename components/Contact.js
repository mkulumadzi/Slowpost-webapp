var React = require('react');

var Contact = React.createClass({

  render() {

    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="page-header">We would love to hear from you.</h1>
            <p>Send any feedback about the app to <a className="link">feedback@slowpost.me</a></p>
            <p>Send support requests to <a className="link">support@slowpost.me</a></p>
          </div>
        </div>
      </div>
    );

  }

});

module.exports = Contact;
