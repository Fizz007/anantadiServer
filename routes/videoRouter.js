const express = require('express');
const router = express.Router();
const {getAllVideos, uploadVideo,removeVideo} = require('../controller/videoController');

router.get('/', getAllVideos);
router.post('/', uploadVideo);
router.delete('/:id', removeVideo);

module.exports = router;
