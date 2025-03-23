const db = require("../config/db");

const getUsers = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM users");

        res.json(rows);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const [result] = await db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);

        res.json({id: result.insertID, name, email});
    } catch (err) { 
        res.status(500).json({error: err.message});
    }
};

module.exports = { getUsers, addUser };