let React = require('react');


let WeatherMessage = ({temp, location}) => {
    // let { temp, location } = props;
    return (
      <h3>It is {temp} degress in {location}.</h3>
    );
};

module.exports = WeatherMessage;
