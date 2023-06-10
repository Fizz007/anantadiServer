// const mongoose = require("mongoose");

// const videoSchema = new mongoose.Schema({
//     videos:[{type:String,required:true}],
//     name:{type:String,required:true},
//     type:{type:String,required:true},
// });

// const Video = mongoose.model("Video",videoSchema);

// module.exports = Video;

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
  },
  { versionKey: false }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
