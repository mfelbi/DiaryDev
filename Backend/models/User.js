const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'superuser']
  }
}, {
  timestamps: true
});

// Hash password sebelum menyimpan pengguna baru
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) {
//     return next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   console.log('Hashed password:', this.password); // Log password yang di-hash
//   next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
