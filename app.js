// install on OS (using the terminal):
    // brew install ffmpeg

// npm packages installed (from text editor):
    // fluent-ffmpeg: process video and audio files
    // dotenv
    // editly


const ffmpeg = require('fluent-ffmpeg');

// ffmpeg('input.mp4')
//   .outputOptions('-vf', 'drawtext=text=YourText:x=10:y=10:fontsize=24:fontcolor=white')
//   .save('output.mp4');

const editly = require('editly');

const editSpec = {
  outPath: './output.mp4',
  clips: [
    {
      layers: [
        { type: 'image', path: '/assets/videos/printingCash.mp4' },
        { type: 'title', text: 'Hello, world!' },
      ],
    },
  ],
};

editly(editSpec)
  .then(() => console.log('Video rendering finished'))
  .catch(console.error);