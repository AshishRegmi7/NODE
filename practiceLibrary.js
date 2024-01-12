const properCase = (string) => {
  const splitter = string
    .split(" ")
    .map((value) => {
      const splitit = value.split("");
      splitit[0] = splitit[0].toUpperCase();
      return splitit.join("");
    })
    .join(" ");
  return splitter;
};
module.exports = { properCase };
