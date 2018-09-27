var express = require("express");
var router = express.Router();
var targets = require("../targets");

/* GET List page. */
router.get("/list.html", function (req, res, next) {
  res.render("list.html.pug", {
    targets: targets.list
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/list.html");
});

router.get("/index.html", function (req, res, next) {
  res.render("index.html.pug", {
    styles: ["index.css"],
    scripts: ["index.js"],
    navTitle: "main"
  });
});

router.get("/index_mission_empty.html", function (req, res, next) {
  res.render("index_mission_empty.html.pug", {
    styles: ["index.css"],
    scripts: ["index.js"],
    navTitle: "main"
  });
});

router.get("/info_environment.html", function (req, res, next) {
  res.render("info_environment.html.pug", {
    styles: ["start.css"],
    // scripts: ['start.js'],
    navTitle: "info"
  });
});

router.get("/start.html", function (req, res, next) {
  res.render("start.html.pug", {
    styles: ["start.css"],
    // scripts: ['start.js'],
    navTitle: "start"
  });
});

router.get("/login.html", function (req, res, next) {
  res.render("login.html.pug", {
    styles: ["start.css"],
    scripts: ["start.js"],
    navTitle: "login"
  });
});

router.get("/input_name.html", function (req, res, next) {
  res.render("input_name.html.pug", {
    styles: ["start.css"],
    scripts: ["start.js"],
    navTitle: "input_name"
  });
});

router.get("/guide.html", function (req, res, next) {
  res.render("guide.html.pug", {
    styles: ["start.css"],
    scripts: ["start.js"],
    navTitle: "guide"
  });
});

router.get("/interest.html", function (req, res, next) {
  res.render("interest.html.pug", {
    styles: ["interest.css"],
    scripts: ["interest.js"],
    navTitle: "interest"
  });
});

router.get("/my_status.html", function (req, res, next) {
  res.render("my_status.html.pug", {
    styles: ["myStatus.css"],
    scripts: ["myStatus.js"],
    navTitle: "my_status"
  });
});

router.get("/mission_issue01.html", function (req, res, next) {
  res.render("mission_issue01.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission"
  });
});

router.get("/mission_issue_no.html", function (req, res, next) {
  res.render("mission_issue_no.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission"
  });
});

router.get("/mission_issue_check_loading.html", function (req, res, next) {
  res.render("mission_issue_check_loading.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission-check"
  });
});

router.get("/mission_issue_check.html", function (req, res, next) {
  res.render("mission_issue_check.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission-check"
  });
});

router.get("/mission_correct.html", function (req, res, next) {
  res.render("mission_correct.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission-check"
  });
});

router.get("/mission_levelup.html", function (req, res, next) {
  res.render("mission_levelup.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission-check"
  });
});

router.get("/mission_wrong.html", function (req, res, next) {
  res.render("mission_wrong.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission"
  });
});

router.get("/mission_wrong02.html", function (req, res, next) {
  res.render("mission_wrong02.html.pug", {
    styles: ["mission.css"],
    scripts: ["mission.js"],
    navTitle: "mission"
  });
});

router.get("/ending.html", function (req, res, next) {
  res.render("ending.html.pug", {
    styles: ["ending.css"],
    scripts: ["ending.js"],
    navTitle: "ending-main"
  });
});

router.get("/ending_select_mission.html", function (req, res, next) {
  res.render("ending_select_mission.html.pug", {
    styles: ["ending.css"],
    scripts: ["ending.js"],
    navTitle: "ending-mission"
  });
});

router.get("/ending_last.html", function (req, res, next) {
  res.render("ending_last.html.pug", {
    styles: ["ending.css"],
    scripts: ["ending.js"],
    navTitle: "ending-last"
  });
});

targets.list.forEach(function (element) {
  router.get("/" + element, function (req, res, next) {
    res.render(element + ".pug");
  });
}, this);

module.exports = router;
