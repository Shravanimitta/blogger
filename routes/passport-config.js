/**
 * Created by Sandeep on 10/07/14.
 */

module.exports=function(LocalStrategy,passport,User){

    passport.use(new LocalStrategy(
        function(username, password, done) {

            User.findOne({ username: username }, function(err, user) {

                if (err) { return done(err); }

                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }

                if (!user.validatePassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                user.password='';

                return done(null, user);

            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id).select('-password').exec(function(err, user) {
            done(err, user);
        });
    });
}