import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el:video, plugins: [new AutoPlay()]});

//boton play/pause
const button1 = document.querySelector('.button1');
button1.onclick = () => player.togglePlay();

//boton mute/unmute
const button2 = document.querySelector('.button2');
button2.onclick = () => player.toggleMute();