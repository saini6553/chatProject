// var UserSchema = mongoose.Schema({
//     email              : String,
//     password           : String,
//     isFacebookAccount  : Boolean
// });
router.post('/register', function(req, res, next) {
    if (
      req.body.email &&
      req.body.name &&
      req.body.favoriteBook &&
      req.body.password &&
      req.body.confirmPassword
    ) {
      if (req.body.password != req.body.confirmPassword) {
        var err = new Error('Passwords do not match');
        err.status = 400;
        return next(err);
      }
  
      var userData = {
        email: req.body.email,
        name: req.body.name,
        favoriteBook: req.body.favoriteBook,
        password: req.body.password
      };
      //use schema's 'create' method to insert document into Mongo
      User.create(userData, function(error, user) {
        if (error) {
          return next(error);
        } else {
          return res.redirect('/profile');
        }
      });
    } else {
      var err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
  });


