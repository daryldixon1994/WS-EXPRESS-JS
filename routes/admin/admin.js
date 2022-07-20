const express = require("express");
const router = express.Router();
let data = [
    {
        id: 1,
        fName: "Ali",
        phoneNumber: 252666666,
    },
    {
        id: 1,
        fName: "Paul",
        phoneNumber: 25226696,
    },
    {
        id: 1,
        fName: "Alex",
        phoneNumber: 465896996,
    },
];
router.get("/users", (req, res) => {
    res.status(200).json({ data });
});
router.get("/posts", (req, res) => {
    res.status(200).json({ posts: "posts" });
});

module.exports = router;
