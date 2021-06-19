const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const DB_CONNECT = require("./config/db");
const routes = require("./routes/bookDirectoryRoutes");
const app = express();

// Load env config file
dotenv.config({ path: "config/config.env" });

// Loading the view engine
app.set("view engine", "ejs");

// Mongodb connection
DB_CONNECT();

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Router mount
app.use("/api/v1", routes);

// Server init
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
