var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
require('bootstrap')

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var ResetPassword = require('./ResetPassword');
var About = require('./About');
var Contact = require('./Contact');
var RequestPasswordReset = require ('./RequestPasswordReset');
var Legal = require ('./Legal');

var App = React.createClass({

  getInitialState(){

    return null;

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
              <a className="navbar-brand navbar-left" href="#">
                <img src="assets/css/Slowpost Banner.png" alt="Brand" height="35" width="210"/>
              </a>
            </div>
            <div className="navbar-collapse collapse navbar-right" id="navigationbar">
              <ul className="nav nav-pills">
                <li role="presentation"><Link to="contact">Contact</Link></li>
                <li role="presentation"><Link to="legal">Legal</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* this is the important part */}
        <RouteHandler/>

        <div id="push"></div>
      </div>
    );
  }

});

// <Route name="reset-password" handler={ResetPassword} onPost={this.resetPassword}/>
// <Route name="request-password-reset" handler={RequestPasswordReset} onPost={this.requestPasswordReset}/>

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="contact" handler={Contact}/>
    <Route name="reset-password" handler={ResetPassword}/>
    <Route name="request-password-reset" handler={RequestPasswordReset}/>
    <Route name="legal" handler={Legal}/>
    <DefaultRoute handler={About}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

module.exports = App;
