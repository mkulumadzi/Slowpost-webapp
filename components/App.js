var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
require('bootstrap');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var ResetPassword = require('./ResetPassword');
var ValidateEmail = require('./ValidateEmail');
var About = require('./About');
var Contact = require('./Contact');
var Privacy = require ('./Privacy');
var Terms = require('./Terms');
var SuccessfulPasswordReset = require('./SuccessfulPasswordReset');

var App = React.createClass({

  getInitialState(){

    return null;

  },

  dismissNav(){
    var navMain = $("#navigationbar");
    navMain.collapse('hide');
  },

  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigationbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand navbar-left" href="#" onClick={this.dismissNav}>
                <img src="assets/css/Slowpost Banner.png" alt="Brand" height="35" width="210"/>
              </a>
            </div>
            <div className="navbar-collapse collapse navbar-right" id="navigationbar">
              <ul className="nav nav-pills">
                <li role="presentation"><Link to="contact">Contact</Link></li>
                <li role="presentation"><Link to="privacy">Privacy</Link></li>
                <li role="presentation"><Link to="terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* this is the important part */}
        <RouteHandler/>

        <div id="push"></div>
        <footer className="footer">
          
          <a href="https://twitter.com/SlowpostApp" className="footer-social btn btn-block btn-social btn-twitter">
            <span className="fa fa-twitter"></span>Follow us on Twitter
          </a>
          <a href="https://www.facebook.com/slowpostapp" className="footer-social btn btn-block btn-social btn-facebook">
            <span className="fa fa-facebook"></span>Like us on Facebook
          </a>
          <p className="footer-text">Made in Menlo Park, California</p>
          <p className="footer-text"><i className="fa fa-copyright"></i>2015, Kuyenda, LLC</p>
        </footer>
      </div>
    );
  }

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="contact" handler={Contact}/>
    <Route name="reset-password" handler={ResetPassword}/>
    <Route name="privacy" handler={Privacy}/>
    <Route name="terms" handler={Terms}/>
    <Route name="reset-password/success" handler={SuccessfulPasswordReset}/>
    <Route name="validate-email" handler={ValidateEmail}/>
    <DefaultRoute handler={About}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

$(function(){
    var navMain = $("#navigationbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

module.exports = App;
