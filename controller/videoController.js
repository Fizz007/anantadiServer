const Video = require("../modal/videoModal");

const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;

    const newVideo = new Video({
      title,
      description,
      videoUrl,
    });

    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const removeVideo = async (req, res) => {
  try {
    const videoId = req.params.id;
    await Video.findByIdAndRemove(videoId);
    res.status(200).json({ message: "Video removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { uploadVideo, getAllVideos, removeVideo };
