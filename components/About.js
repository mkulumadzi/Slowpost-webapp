var React = require('react');

var About = React.createClass({

  componentDidMount: function() {
    document.title = "Slowpost";
  },

  render() {

    return (

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="centered col-xs-12 col-sm-6 col-md-6">
              <p className="page-title">Say something meaningful</p>
              <p>Slowpost brings the joy of a postcard to your phone, creating surprising, intimate communication with the people you care about most.</p>
              <a href="https://ad.apps.fm/gIJxomrWUEg2Ffgzw8O2AfE7og6fuV2oOMeOQdRqrE27j-ERwjcsNO7J1qdLzXLo7nkyfM0fYq1OahDQ-WIbQoI3KrEfrKcPhcwwOVMS9d6zo9Hnp7Dp_hgoVh9PhhZv"><img className="app-icon hidden-xs hidden-sm" src="assets/slowpost-icon.png" alt="Slowpost Icon"/></a>
              <a href="https://ad.apps.fm/gIJxomrWUEg2Ffgzw8O2AfE7og6fuV2oOMeOQdRqrE27j-ERwjcsNO7J1qdLzXLo7nkyfM0fYq1OahDQ-WIbQoI3KrEfrKcPhcwwOVMS9d6zo9Hnp7Dp_hgoVh9PhhZv"><img className="download-icon" src="assets/Download_on_the_App_Store_Badge_US-UK_135x40.svg" alt="Download on the App Store"/></a>
              <h3>Email <a href="mailto:info@slowpost.me" className="link">info@slowpost.me</a> to learn more.</h3>
            </div>
            <div className="centered col-xs-12 col-sm-6 col-md-6">
              <img className="main-app-image" src="assets/slowpost-mailbox.png" alt="Slowpost Mailbox view"/>
            </div>
          </div>
        </div>
        <div className="row grey centered">
          <h1>Keep in touch</h1>
        </div>
        <div className="row grey">
          <div className="card centered col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <img className="app-image" src="assets/slowpost-message.png" alt="Slowpost Message view"/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <p className="text-box">Pick a friend (or three), choose your own photo or one from our gallery, and compose a message.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row grey">
          <div className="card centered col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
            <div className="container-fluid">
              <div className="row">
                <div className="hidden-xs col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-2">
                  <p className="text-box">Choose standard delivery, or pick a date and time to have your message arrive.</p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <img className="app-image" src="assets/schedule-delivery.png" alt="Schedule delivery view"/>
                </div>
                <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                  <p className="text-box">Choose standard delivery, or pick a date and time to have your message arrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row grey">
          <div className="card centered col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <img className="app-image" src="assets/view-conversation.png" alt="Slowpost conversation view"/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <p className="text-box">At the chosen date, your friends will get their Slowpost!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row grey">
          <div className="card centered col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <img className="app-image" src="assets/turtle-youre-great.jpeg" alt="How Slopost works"/>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <p className="text-box">Check out our gallery often - we keep it updated to help you say more!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container centered">
          <h1>Available for free on iOS!</h1>
          <a href="https://ad.apps.fm/gIJxomrWUEg2Ffgzw8O2AfE7og6fuV2oOMeOQdRqrE27j-ERwjcsNO7J1qdLzXLo7nkyfM0fYq1OahDQ-WIbQoI3KrEfrKcPhcwwOVMS9d6zo9Hnp7Dp_hgoVh9PhhZv"><img className="download-icon" src="assets/Download_on_the_App_Store_Badge_US-UK_135x40.svg" alt="Download on the App Store"/></a>
          <h3>Email <a href="mailto:info@slowpost.me" className="link">info@slowpost.me</a> for information about other platforms.</h3>
        </div>
      </div>
    );

  }

});

module.exports = About;
