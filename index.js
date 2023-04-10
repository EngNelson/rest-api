const express = require("express");
const app = express();

let userList = [
  {
    name: "Pedro",
    age: 19,
    married: false,
  },
  {
    name: "Pedro",
    age: 20,
    married: false,
  },
  {
    name: "Job",
    age: 20,
    married: true,
  },
];

app.get("/users", (req, res) => {
  res.json(userList);
});

app.post("/users", (req, res) => {
  // Grab data sent by client
  //   Add data to userList
  //  Return new list

  const newUser = req.body;
  userList.push(newUser);
  res.json(userList);
});

app.listen("3001", () => {
  console.log("Servder running on port 30001");
});
