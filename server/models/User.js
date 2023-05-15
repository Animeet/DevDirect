//pulling in packages
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//function to validate user email
function validateEmail () {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(this.email);
}

//creating user schema
const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'You must enter a valid email address.']
    },
    password: {
      type: String,
      required: true,
      min: 6
    },
  });

//removing the users password from the response
userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

//function to make password salty
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const encrypted_password = await bcrypt.hash(this.password, 10);
  
      this.password = encrypted_password;
      return next();
    }
  
    next();
  });

//function to check if password is correct
userSchema.methods.validatePass = async function (form_password) {
    const is_valid = await bcrypt.compare(form_password, this.password);
  
    return is_valid;
};

//creating the MODEL 
const User = model('user', userSchema);

//exporting the MODEL
module.exports = User;
