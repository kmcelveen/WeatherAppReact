let React = require('react');
let { Link, IndexLink } = require('react-router');


var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
        if(location.length > 0){
            this.refs.search.value = '';
            window.location.hash = "#/?location=" + encodedLocation;
        }
        // alert('this is trash');
    },
    render: function(){
        return (
          <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{textDecoration: 'underline'}}>Weather</IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{textDecoration: 'underline'}}>About</Link></li>
                    <li><Link to="/example" activeClassName="active" activeStyle={{textDecoration: 'underline'}}>Example</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form>
                    <ul className="menu">
                        <li>
                            <input type="search" placeholder="Search Weather by city"  ref="search"/>
                        </li>
                        <li>
                            <button type="button" className="button" value="Get Weather" onClick={this.onSearch}>Get Weather</button>
                        </li>
                    </ul>
                </form>
            </div>
          </div>
        );
    }
});

module.exports = Nav;
