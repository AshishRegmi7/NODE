const multiply = () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("result").innerHTML = `Result:${result}`;
};

const divide = () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const result = num1 / num2;
  document.getElementById("result").innerHTML = `Result:${result}`;
};
