const userRole = ["admin", "vendor"];
const roles = ["vendor"];

const checkRole = (a, b) => {
const check=b.map((value)=>a.includes(value));
return check.includes(true);
}

console.log(checkRole(userRole,roles));

