// ES 2015 이상의 문법
// import express from "express";
// 현재 nodejs가 지원하는 문법
const express = require("express");
const router = express.Router();
const { bbsDao } = require("../models/index");

router.get("/", (req, res) => {
  //   res.send("반갑습니다.");
  res.render("index", { data: "data" });
});

router.get("/bbsList", (req, res) => {
  const list = [
    { id: 0, writer: "홍길동", subject: "게시판" },
    { id: 1, writer: "이몽룡", subject: "게시판" },
    { id: 2, writer: "성춘향", subject: "게시판" },
  ];
  bbsDao.findAll({ order: [["b_date_time", "DESC"]] }).then((bbsList) => {
    res.json(bbsList);
  });
  //   res.json(list);
});

/**
 * web browser로부터 데이터 전달받기
 * ?변수=값 : req.query.변수
 * /:변수 : req.params.변수
 * ajax를 통해서 전달받은 데이터 : req.body.변수
 */
router.post("/insert", (req, res) => {
  bbsDao
    .create({
      b_writer: req.body.b_writer,
      b_date_time: Date().toString(),
      b_subject: req.body.b_subject,
      b_content: req.body.b_content,
    })
    .then((result) => {
      //   res.json(result);
      res.redirect("/api/bbsList");
    });
});

router.get("/view", (req, res) => {
  const b_id = req.query.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

// localhost:3000/api/view/10
router.get("/view/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

router.post("/update/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .update(
      {
        b_writer: req.body.b_writer,
        b_subject: req.body.b_subject,
        b_content: req.body.b_content,
      },
      { where: { b_id: Number(b_id) } }
    )
    .then((result) => {
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .destroy({
      where: { b_id: b_id },
    })
    .then((result) => {
      res.redirect("/api/bbsList");
    });
});
module.exports = router;
