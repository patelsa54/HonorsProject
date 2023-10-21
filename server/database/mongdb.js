import mongoose from "mongoose";

async function connect() {
  const username = process.env.MONGO_DB_USERNAME;
  const passport = process.env.MONGO_DB_PASSWORD;
  const url = process.env.MONGO_DB_URL;

  await mongoose.connect(
    `mongodb+srv://freindshubhampatel:XCv4tYMopsWCLvbv@cluster0.hnydmwf.mongodb.net/honorsData`
  );
  console.log("MongoDB connection is successful");
}

export default connect;
