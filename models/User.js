const mongoose = require('../db/connection');
const Schema = mongoose.Schema 

const UserSchema = new Schema({
	email: String,
	name: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
