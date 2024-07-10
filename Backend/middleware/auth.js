// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const auth = async (req, res, next) => {
//   const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;

//   if (!token) {
//     // Jika tidak ada token, lanjutkan tanpa otentikasi
//     return next();
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token });

//     if (!user) {
//       throw new Error();
//     }

//     req.token = token;
//     req.user = user;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Please authenticate.' });
//   }
// };

// const superuser = (req, res, next) => {
//   if (req.user.role !== 'superuser') {
//     return res.status(403).json({ message: 'Access denied.' });
//   }
//   next();
// };

// module.exports = { auth, superuser };


const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;

  if (!token) {
    return next(); // Lanjutkan tanpa otentikasi jika tidak ada token
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
  } catch (err) {
    return res.status(401).json({ message: 'Please authenticate.' });
  }
  next();
};

const superuser = (req, res, next) => {
  if (req.user.role !== 'superuser') {
    return res.status(403).json({ message: 'Access denied.' });
  }
  next();
};

module.exports = { auth, superuser };

