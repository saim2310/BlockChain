/** @format */
users = [
  { name: "saim", pass: 123 },
  { name: "jahangir", pass: 1234 },
  { name: "xyz", pass: 12345 },
];
function adduser(user1, pass1) {
  users.push({
    name: user1,
    pass: pass1,
  });
}
function getuser() {
  users.forEach((user) => {
    console.log(user);
  });
}

function login(user1, pass1) {
  users.forEach((user) => {
    // console.log(user);

    if (user.name === user1 && user.pass === pass1) {
      console.log("user found");
      return;
    } else {
      console.log("user not foud");
      return;
    }
  });
}
temp_user = [];

//adduser("saim", 123);
getuser("saim", 123);
login("saim", 123);
