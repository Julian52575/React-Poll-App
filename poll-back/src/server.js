const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
