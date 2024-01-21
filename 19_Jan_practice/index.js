//Write a JS function that converts the following text into ... statement.

const toStatement = (string) => {
  let result = string.slice(0, string.length / 2).concat("....");
  return result;
};
console.log(
  toStatement(
    "Hello Im a MERN stack developer.My name is Ashish Regmi and I live in Kathmandu"
  )
);

//Write a js function that returns boolean when correct mobile number is passed.

const isValidNo = (number) => {
  const stringNum = String(number);
  if (stringNum.length < 10 || stringNum.length > 10) return false;
  return stringNum.startsWith("98");
};
console.log(isValidNo(9862078833));
