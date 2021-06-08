const mongoose = require("mongoose");

const DB_CONNECT = async () => {
  const db = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MONGODB connected successfully on ${db.connection.host}`);
};

module.exports = DB_CONNECT;
