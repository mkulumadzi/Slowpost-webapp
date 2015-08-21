var React = require('react');

var About = React.createClass({

  render() {

    return (
        <div>
          <h1>About Slowpost</h1>
          <h2>SAY SOMETHING MEANINGFUL</h2>
          <p> Slowpost enables meaningful, modern communication between friends and family. Choose a person to write to, add a photo, compose your message, and then send it! Your Post will be delivered to your friends phone 2 to 3 days after being sent. Enjoy the deeper form of communication that happens when people stop chatting and start saying something meaningful to each other.</p>
          <p>Slowpost is currently in Beta. Features include:</p>
          <li>Import your address book to find contacts who have already registered, or find your friends using their email or username</li>
          <li>Add your own photo to a card, or choose from a gallery of curated images and drawings</li>
          <h2>HOW DO I SIGN UP?</h2>
          <p>We are currently in a private beta. If you would like to be a part of the beta testing, please submit an inquiry to support@slowpost.me.</p>
          <p>Slowpost is coming to the Apple App Store soon!</p>
        </div>
    );

  }

});

module.exports = About;
