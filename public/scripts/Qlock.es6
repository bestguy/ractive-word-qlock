import Ractive from 'ractive';

function say(text) {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}

export default Ractive.extend({ // jshint ignore:line
  template: require('./Qlock.html'),
  data() {
    return {
      time: new Date()
    }
  },
  computed: {
    m() {
      return this.get('time').getMinutes()
    },
    h() {
      let h = this.get('time').getHours();
      let m = this.get('m');
      return (h + (m >= 40 ? 1 : 0)) % 12;
    },
    past() {
      let m = this.get('m');
      return m >= 5 && m < 35;
    },
    to() {
      return this.get('m') >= 35;
    },
    oclock() {
      let m = this.get('m');
      return m >= 0 && m < 5;
    },
    oneMinute() {
      return this.get('m') % 5 >= 1;
    },
    twoMinutes() {
      return this.get('m') % 5 >= 2;
    },
    threeMinutes() {
      return this.get('m') % 5 >= 3;
    },
    fourMinutes() {
      return this.get('m') % 5 >= 4;
    },
    fiveMinutes() {
      let m = this.get('m');
      return (m >= 5 && m < 10) || (m >= 55) || (m >= 25 && m < 30) || (m >= 35 && m < 40);
    },
    tenMinutes() {
      let m = this.get('m');
      return (m >= 10 && m < 15) || (m >= 50 && m < 55);
    },
    quarter() {
      let m = this.get('m');
      return (m >= 15 && m < 20) || (m >= 45 && m < 50);
    },
    twentyMinutes() {
      let m = this.get('m');
      return (m >= 20 && m < 30) || (m >= 35 && m < 45);
    },
    half() {
      let m = this.get('m');
      return (m >= 30 && m < 35);
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
