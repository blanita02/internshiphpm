const url = require("url");
const users = require("./userData.js");
exports.getUsers = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  var response = [
    {
      message: "Here are the list of users ",
    },
    users,
  ];
  res.statusCode = 200;
  res.setHeader("content-Type", "Application/json");
  res.end(JSON.stringify(response));
};
