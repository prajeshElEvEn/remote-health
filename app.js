const express = require("express");
const app = express();
//require("dotenv/config");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());

// user authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// Artist links
const artistsRoute = require("./routes/artists");
app.use("/api/artists/", artistsRoute);

// Album links
const albumRoute = require("./routes/ngo");
app.use("/api/ngo/", albumRoute);

// Songs links
const songRoute = require("./routes/Podcast");
app.use("/api/Podcast/", songRoute);



//blog
const Blogroute=require("./routes/blog")
app.use("/api/blogs/",Blogroute)


// If any depreciation warning add depreciation options
// mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
//   console.log("Mongodb Connected");
// });

mongoose.connect("mongodb+srv://ayush:12345@cluster0.x0duiki.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });
const PORT =process.env.PORT || 4000
app.listen(PORT, () => console.log("lisitening to port"));
