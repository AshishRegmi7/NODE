//Write a node js application to encrypt the password using package called bcryptjs.

const bcrypt = require("bcryptjs");

//hash

const encrypt = (string) => {
  return bcrypt.hashSync(string, 10);
};
const hashed = encrypt("ashish");
console.log(hashed);
//compare

const compare = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};
console.log(compare("ashish", hashed));
