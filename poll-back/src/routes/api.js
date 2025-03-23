const express = require("express");
const router = express.Router();

const replyHello = async (req, res) => {
    console.log("replyHello");
    try {
        res.status(200).end();
    } catch (err) { 
        res.status(500).json({error: err.message});
    }
};

router.get("/", replyHello);

module.exports = router;