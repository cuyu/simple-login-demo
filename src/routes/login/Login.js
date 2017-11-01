/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import axios from 'axios';
import s from './Login.css';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/login', {
      username: this.inputUsername.value,
      password: this.inputPassword.value,
    }).then((response) => {
      this.setState({message: ''});
      console.log(response)
      // redirect to root path if login success
      window.location = '/';
    }).catch((error) => {
      console.log(error)
      this.setState({message: 'Username or password is not correct!'});
    });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>
            Log in with your username or company email address.
          </p>
          <form method="post" onSubmit={this.handleSubmit.bind(this)}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="username">
                Username or email address:
              </label>
              <input
                className={s.input}
                id="username"
                type="text"
                name="username"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                ref={(input) => this.inputUsername = input}
              />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
              </label>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
                ref={(input) => this.inputPassword = input}
              />
            </div>
            <div className={s.warning}>
              <span>
                {this.state.message}
              </span>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
