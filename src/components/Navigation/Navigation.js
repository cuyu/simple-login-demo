/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import axios from 'axios';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      mouseOn: false,
    };
  }

  componentDidMount() {
    // todo: use singleton axios instance or just this.context.fetch function to send http request
    axios.get('/user').then((response) => {
      console.log(response)
      this.setState({...this.state, username: response.data});
    });
  }

  render() {
    if (this.state.mouseOn) {
      return (
        <div className={s.root} role="navigation">
          <Link className={s.link} to="/about">
            About
          </Link>
          <Link className={s.link} to="/contact">
            Contact
          </Link>
          <span className={s.spacer}> | </span>
          <Link className={s.link} to="/logout" onMouseLeave={() => this.setState({
            ...this.state,
            mouseOn: false,
          })}>
            Log out
          </Link>
        </div>
      );
    }
    else {
      return (
        <div className={s.root} role="navigation">
          <Link className={s.link} to="/about">
            About
          </Link>
          <Link className={s.link} to="/contact">
            Contact
          </Link>
          <span className={s.spacer}> | </span>
          <span className={s.link}
                onMouseEnter={() => this.setState({
                  ...this.state,
                  mouseOn: true
                })}>{this.state.username ? `Welcome ${this.state.username}` : ''}</span>
        </div>
      );
    }
  }
}

export default withStyles(s)(Navigation);
