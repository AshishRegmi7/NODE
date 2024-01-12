//Create your own module(library)
/*1.Write a function
2.Export that function out of the File.
3.Require that file in the serrver file
*/
const getHello = () => {
  console.log("Hello from library");
};

const getNamaste = (name) => {
  console.log(`Namaste ${name}`);
};

const getGreetings = (jojo) => {
  console.log(`jojoloppa ${jojo}`);
};

const addition = (a, b) => {
  console.log(a + b);
};

const sub = (c, d) => {
  console.log(c - d);
};

module.exports = { getHello, getNamaste, getGreetings, addition, sub };
