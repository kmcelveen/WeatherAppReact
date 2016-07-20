let React = require('react');
let { Link, IndexLink } = require('react-router');


var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        alert('this is trash');
    },
    render: function(){
        return (
          <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
                    <li><Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li>
                            <input type="search" placeholder="Search Weather" />
                        </li>
                        <li>
                            <button type="button" className="button" value="Get Weather">Get Weather</button>
                        </li>
                    </ul>
                </form>
            </div>
          </div>
        );
    }
});

module.exports = Nav;
