const { default: mongoose } = require("mongoose");

const URI = `mongodb+srv://pritamnagar:pritamnagar@cluster0.bq8rspd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const mongoDb = async () => {
  await mongoose
    .connect(URI)
    .then(() => {
      console.log("Connected To mongodb succesfully");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = mongoDb;
