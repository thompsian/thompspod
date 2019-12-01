import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'

import News from './News'

class Home extends React.Component {
  render () {
    return (
        <Router>
          <div>
            <h1>Home Page</h1>
            <Route exact path="/" component={News} />
          </div>
        </Router>
    );
  }
}

export default Home
