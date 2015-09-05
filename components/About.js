var React = require('react');

var About = React.createClass({

  render() {

    return (

      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="page-header">Say something meaningful.</h1>
            <p> Slowposts are beautiful, time-delayed message evoking a postcard or a letter. Enjoy the surprising, delightful, deeper form of communication that happens when people stop chatting and start saying something meaningful to each other.</p>
            <h2>Email <a className="link">info@slowpost.me</a> to join the private beta for iOS.</h2>
          </div>
        </div>

        <div id="screenshotCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#screenshotCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#screenshotCarousel" data-slide-to="1"></li>
            <li data-target="#screenshotCarousel" data-slide-to="2"></li>
            <li data-target="#screenshotCarousel" data-slide-to="3"></li>
            <li data-target="#screenshotCarousel" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="carousel-image first-slide" src="assets/slowpost-choose-photo.png" alt="First slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Create a Slowpost.</h1>
                  <p>Choose who to write to, and add your own photo or choose from a gallery of cards.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="carousel-image second-slide" src="assets/slowpost-compose-message.png" alt="Second slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Compose a message.</h1>
                  <p>Say something quick, or write a long note - the choice is yours!</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="carousel-image third-slide" src="assets/slowpost-schedule-delivery.png" alt="Third slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Decide when to deliver.</h1>
                  <p>Choose to deliver your mail in a few days, in just a few minutes, or at a specific date and time.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="carousel-image fourth-slide" src="assets/slowpost-view-conversation.png" alt="Fourth slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>View a conversation.</h1>
                  <p>Easily find mail you have sent, whether it has been delivered or not, and find mail you have received as well.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="carousel-image fifth-slide" src="assets/slowpost-view-mail.png" alt="Fifth slide"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Read your mail.</h1>
                  <p>See what your friend had to say, and reply to keep the conversation going!</p>
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

        <div className="jumbotron">
          <div className="container">
            <h2>Slowpost is coming to the Apple App Store soon!</h2>
          </div>
        </div>

      </div>
    );

  }

});

module.exports = About;
