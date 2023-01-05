class MediaPlayer {
    constructor(config) {
      this.media = config.el;
      this.plugins = config.plugins || []; //array vacio para que funcione cuando no hay plugins

      this._initPlugins();
    }
  
    _initPlugins(){
      this.plugins.forEach(plugin => {
        plugin.run(this);
      });
    }

    play() {
      this.media.play();
    }
  
    pause() {
      this.media.pause();
    }
  
    togglePlay() {
      if (this.media.paused) {
        this.play();
      } else {
        this.pause();
      }
    }
  }
  
  export default MediaPlayer;