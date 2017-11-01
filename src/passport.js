/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import LocalStrategy from 'passport-local';
import {User} from './data/models';

passport.serializeUser(function (user, done) {
  done(null, user.name);
});

passport.deserializeUser(function (name, done) {
  User.findOne({where: {name: name}}).then((user) => {
    done(null, user);
  });
});

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({where: {name: username}}).then((user) => {
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user);
    }, (err) => {
      if (err) {
        return done(err);
      }
    });
  })
);

export default passport;
