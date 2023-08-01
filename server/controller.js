const url = require("url");

const availableEndpoints = [
  {
    url: "/users",
    method: "GET",
    description: "Get all users",
  },
  {
    url: "/users",
    method: "POST",
    description: "Add a user",
  },
];

const users = require("./userData.js");

exports.getUsers = function (req, res) {
  const reqUrl = url.parse(req.url, true);
  let response = [
    {
      message: "Here are the list of users ",
    },
    users,
  ];
  res.statusCode = 200;
  res.setHeader("content-Type", "Application/json");
  res.end(JSON.stringify(response));
};

exports.createUser = function (req, res) {
  body = "";

  req.on("data", function (chunk) {
    body += chunk;
  });

  req.on("end", function () {
    postBody = JSON.parse(body);
    let response = [
      {
        text: "User added successfully",
      },
      postBody,
    ];

    res.statusCode = 201;
    res.setHeader("content-Type", "Application/json");
    res.end(JSON.stringify(response));
  });

  exports.invalidUrl = function (req, res) {
    let response = [
      {
        text: "Error: Invalid URL",
      },
      availableEndpoints,
    ];
    res.statusCode = 404;
    res.setHeader("content-Type", "Application/json");
    res.end(JSON.stringify(response));
  };
};
