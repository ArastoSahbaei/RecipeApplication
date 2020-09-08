const passport = require('passport')
const UserModel = require('../models/Users.model')


module.exports = app => {
    app.post('/registerUser', (req, res, next) => {
        passport.authenticate('register', (err, user, info) => {
            console.log("LOOOL", user)
            if (err) { console.error(err); }
            if (info !== undefined) {
                console.error(info.message);
                res.status(403).send(info.message);
            } else {
                req.logIn(user, error => {
                    console.log("THIS IS LE USER:", user);
                    console.log(req.body.email)
                    const data = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        username: req.body.username
                    };
                    console.log(data);
                    UserModel.findOne({ where: { username: username } })
                        .then(user => {
                            console.log("THIS IS LE USER:", user);
                            user.update({
                                first_name: data.first_name,
                                last_name: data.last_name,
                                username: username,
                            }).then(() => {
                                console.log('user created in db');
                                res.status(200).send({ message: 'user created' });
                            });
                        });
                });
            }
        })(req, res, next);
    });
};