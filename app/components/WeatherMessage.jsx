let React = require('react');


let WeatherMessage = ({temp, location}) => {
    // let { temp, location } = props;
    return (
      <h3>It is {temp} degrees in {location}.</h3>
    );
};

module.exports = WeatherMessage;
