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
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
          </div>
        </div>
      </div>
    );
};

module.exports = Main;
