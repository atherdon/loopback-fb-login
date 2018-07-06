const Raven = require("raven");
Raven.config(`https://${process.env.SENTRY_KEY}@sentry.io/${process.env.SENTRY_APP}`).install();

 module.exports = function () {
     return function raven(err, req, res, next) {
        if(err) {
            Raven.captureException(err);
        };
        next();
     };
 }