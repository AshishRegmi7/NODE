//Function for conversion  of title to slug.

const conversion = (string) => {
  return string
    .split(" ")
    .map((value) => value.toLowerCase())
    .join("-");
};
console.log(conversion("Back End and web"));
