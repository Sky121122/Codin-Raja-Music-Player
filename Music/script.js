const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevTrackBtn = document.getElementById('prev-track');
const nextTrackBtn = document.getElementById('next-track');
const volumeSlider = document.getElementById('volume-slider');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

// Replace with an array of song objects containing src and title properties
const playlist = [
  { src: 'path/to/song1.mp3', title: 'Song 1' },
  { src
