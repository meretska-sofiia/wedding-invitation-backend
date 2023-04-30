const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose.set("strictQuery", false);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: ", PORT || 3000);
    });
  })
  .catch((error) => {
    console.log("Error ", error.message);
    process.exit(1);
  });
