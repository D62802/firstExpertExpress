const express = require("express");
const app = express();
const port = 3000;
var contactList = [
  {
    name: "Rio",
    phone: "1111111111",
  },
  {
    name: "Tony Stark",
    phone: "1234567890",
  },
  {
    name: "Richard",
    phone: "12131321321",
  },
];
const path = require("path");
app.set("view engine", "ejs");
app.set("Views", path.join(__dirname, "Views"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "node class",
  });
});
app.get("/viewlist", (req, res) => {
  res.render("index", {
    title: "contact",
    list: {
      name: contactList,
    },
  });
});
// app.use(path.join(__dirname, "public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
