var React = require('react');

var About = React.createClass({

  render() {

    return (

      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="page-header">SAY SOMETHING MEANINGFUL</h1>
            <p> Slowpost enables meaningful, modern communication between friends and family. Choose a person to write to, add a photo, compose your message, and then send it! Your Slowpost will be delivered to your friends phone 1 to 2 days after being sent. Enjoy the deeper form of communication that happens when people stop chatting and start saying something meaningful to each other.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Get the iOS app</a></p>
          </div>
        </div>

        <div id="screenshotCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#screenshotCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#screenshotCarousel" data-slide-to="1"></li>
            <li data-target="#screenshotCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="carousel-image first-slide" src="assets/slide1.png" alt="First slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Example headline.</h1>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="carousel-image second-slide" src="assets/slide2.png" alt="Second slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="carousel-image third-slide" src="assets/slide3.png" alt="Third slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#screenshotCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#screenshotCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div>
          <p>Slowpost is currently in Beta. Features include:</p>
          <li>Import your address book to find contacts who have already registered, or find your friends using their email or username</li>
          <li>Add your own photo to a card, or choose from a gallery of curated images and drawings</li>
          <h2>HOW DO I SIGN UP?</h2>
          <p>We are currently in a private beta. If you would like to be a part of the beta testing, please submit an inquiry to support@slowpost.me.</p>
          <p>Slowpost is coming to the Apple App Store soon!</p>
        </div>
      </div>
    );

  }

});

module.exports = About;
