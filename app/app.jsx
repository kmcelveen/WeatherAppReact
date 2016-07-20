let React = require('react');
const ReactDOM = require('react-dom');
let { Route, Router, IndexRoute, hashHistory } = require('react-router');
let Main = require('./components/Main');
let Weather = require('./components/Weather');
let About = require('./components/About');
let Example = require('./components/Example');
let WeatherForm = require('./components/WeatherForm');
let WeatherMessage = require('./components/WeatherMessage');


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
