const bcrypt = require('bcrypt')
const UserModel = require('../app/models/Users.model')
const BCRYPT_SALT_ROUNDS = 12;
const passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    JWTstrategy = require('passport-jwt').Strategy,
    ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'register',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        (username, password, done) => {
            console.log("ATTEMPTING PASSPORT:", username)
            try {
                UserModel.findOne({ where: { username: username } })
                    .then(user => {
                        if (user != null) {
                            return done(null, false, { message: 'username already taken' });
                        } else {
                            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
                                UserModel.create({ username: username, password: hashedPassword })
                                    .then(user => {
                                        console.log('user created');
                                        // note the return needed with passport local - remove this return for passport JWT to work
                                        done(null, user);
                                    });
                            });
                        }
                    });
            } catch (err) {
                done(err);
            }
        },
    ),
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        (username, password, done) => {
            try {
                UserModel.findOne({ username: username })
                    .then(user => {
                        if (user === null) {
                            return done(null, false, { message: 'bad username' });
                        } else {
                            bcrypt.compare(password, user.password)
                                .then(response => {
                                    if (response !== true) {
                                        console.log('passwords do not match');
                                        return done(null, false, { message: 'passwords do not match' });
                                    }
                                    console.log('user found & authenticated:', user);
                                    // note the return needed with passport local - remove this return for passport JWT
                                    done(null, user);
                                });
                        }
                    });
            } catch (err) {
                done(err);
            }
        },
    ),
);

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: "jwtSecret.secret",
};

passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
        try {
            User.findOne({ username: jwt_payload.id })
                .then(user => {
                    if (user) {
                        console.log('user found in db in passport');
                        // note the return removed with passport JWT - add this return for passport local
                        done(null, user);
                    } else {
                        console.log('user not found in db');
                        done(null, false);
                    }
                });
        } catch (err) {
            done(err);
        }
    }),
);