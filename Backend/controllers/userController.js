const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Untuk mendaftarkan pengguna baru
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash password sebelum menyimpan pengguna baru
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    console.log('User created:', user); // Log pengguna yang dibuat
    res.status(201).json({ user });
  } catch (err) {
    console.log('Error during registration:', err.message); // Log error registrasi
    res.status(400).json({ message: err.message });
  }
};

// Untuk login pengguna
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log(req.body,); // Log email yang diterima untuk login
    const user = await User.findOne({ username });
    console.log('User found:', user); // Log pengguna yang ditemukan
    if (!user) {
      console.log('User not found');
      throw new Error('Invalid credentials');
    }

    // Logging tambahan untuk bcrypt.compare
    console.log("pass", user.password)

    if (!(await bcrypt.compare(password, user.password))) {
      console.log('Password does not match');
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, email: user.email, username: user.username, role: user.role });
  } catch (err) {
    console.log('Error during login:', err.message); // Log error login
    res.status(400).json({ message: err.message });
  }
};

// Untuk mendapatkan data pengguna saat ini
exports.getMe = async (req, res) => {
  res.json(req.user);
};

// Untuk menghapus pengguna (superuser)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
