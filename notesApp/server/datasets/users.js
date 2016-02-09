var mongoose = require('mongoose');

// exporting 'User' as the first parameter and an unnamed object as the next
module.export = mongoose.model('User', {
    email: String,
    password: String
});
