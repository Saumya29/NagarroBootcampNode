/**
 * Created by championswimmer on 15/06/17.
 */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/models').User;

passport.serializeUser(function (user, done) {
    console.log('serializing user :' + user.id);
    done(null, user.id)
});

passport.deserializeUser(function (userKey, done) {
    console.log('Deserializing user :' + userKey);
    User.findByPrimary(userKey).then((user) => {
        done(null, user)
    }).catch((err) => {
        done(err)
    })
});


passport.use(new LocalStrategy(
    function (username, password, done) {

        User.findOne({
            where: {
                username: username,
                password: password
            }
        }).then((user) => {

            if(!user) {
                return done(null, false, {message: 'Username or password was wrong'})
            }

            return done(null, user);


        }).catch((err) =>{
            done(err);
        })
    })
);


module.exports = passport;