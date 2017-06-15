/**
 * Created by championswimmer on 15/06/17.
 */

function ensureLoggedIn(redirPath) {

    return function (req, res, next) {

        if (!req.user) {
            res.redirect(redirPath)
        } else {
            next();
        }

    }

}

module.exports = {
    eli: ensureLoggedIn
};