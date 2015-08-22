var React = require('react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

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
        <header>
          <ul>
            <li><Link to="app">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="legal">Legal</Link></li>
          </ul>
        </header>

        {/* this is the important part */}
        <RouteHandler/>
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
