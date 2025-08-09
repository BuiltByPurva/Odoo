const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 60 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 }
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

/*
  NOTE: For MySQL, define an equivalent model with Sequelize or Prisma.
  - Keep fields: id, name, email (unique), password (hashed), createdAt, updatedAt.
*/

module.exports = mongoose.model('User', userSchema);

