const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mylib", {

 useNewUrlParser: true,

 useUnifiedTopology: true,

});

const Movie = mongoose.model("Movie", {

    title: String,
   
    type: String,
   
    genres: Array,
   
   });

   const printMongoResult = async (result) => {

    console.log(await result);
   
   };

Movies.find({});