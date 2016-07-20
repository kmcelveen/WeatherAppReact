let React = require('react');
let WeatherForm = require('./WeatherForm');
let WeatherMessage = require('./WeatherMessage');
let openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
  
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    let that = this;
    this.setState({
      isLoading: true
    })
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(errorMessage){
      that.setState({
        isLoading: false
      })
      alert(errorMessage);
    })
  },

  render: function () {
    let { temp, location, isLoading } = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3>Fetch weather....</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <h2>Weather component</h2>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  },
});

module.exports = Weather;
