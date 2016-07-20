var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');
var Example = require('./components/Example');
var WeatherForm = require('./components/WeatherForm');
var WeatherMessage = require('./components/WeatherMessage');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="example" component={Example} />
      <IndexRoute component={Weather} />
    </ Route>
  </Router>,
  document.getElementById('app')
);
