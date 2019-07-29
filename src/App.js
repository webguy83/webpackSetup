import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './containers/Users';

import asyncComponent from './hoc/asyncComponent';

const asyncFood = asyncComponent(() => {
    return import('./containers/Food');
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/food">Food</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/food" component={asyncFood} />
                </div>
            </div>
        );
    }
}

export default App;