let React = require('react');
let Nav = require('./Nav');
let Weather = require('./Weather');
let About = require('./About');
let Example = require('./Example');
let WeatherForm = require('./WeatherForm');
let WeatherMessage = require('./WeatherMessage');


var Main = (props) => {
    return (
      <div>
        <Nav />
        <h2>From Main</h2>
        {props.children}
      </div>
    );
};

module.exports = Main;
