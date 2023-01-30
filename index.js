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

app.use(express.urlencoded());
app.use(express.static("assets"));
app.get("/", (req, res) => {
  res.render("index", {
    title: "node class",
    user: {
      name: "ra,aN",
    },
    list: {
      name: contactList,
    },
  });
});
app.get("/viewlist", (req, res) => {
  res.render("project", {
    title: "contact",
    list: {
      name: contactList,
    },
  });
});
app.post("/contact", (req, res) => {
  console.log("expected error:", req.body);
  contactList.push(req.body);
  return res.redirect("/viewlist");
  // res.render("project", {
  //   title: "contact",
  //   list:
  //     name: contactList,
  //   },
  // });
});
// app.use(path.join(__dirname, "public"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
