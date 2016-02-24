import Ractive from 'ractive';

function say(text) {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

export default Ractive.extend({ // jshint ignore:line
  template: require('./App.html'),
  data() {
    return {
      time: new Date()
    }
  },
  oninit() {
    setInterval(() => {
      let now = new Date();
      this.set('time', now);
      if (window.speechSynthesis && SpeechSynthesisUtterance) {
        let hour = this.get('h');
        if (now.getMinutes() == 0 && now.getSeconds() < 3) {
          say(`It is ${hour} o'clock`);
        } else if (now.getMinutes() == 30 && now.getSeconds() < 3) {
          say(`It is half past ${hour}.`);
        }
      }
    }, 3000);
  }
});
