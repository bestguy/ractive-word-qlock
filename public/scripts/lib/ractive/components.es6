import Ractive from 'ractive';

Ractive.components.led = Ractive.extend({
  data: {
    t: false
  },
  template: '{{#on}}<b>{{yield}}</b>{{/}}{{^on}}{{yield}}{{/}}'
});

Ractive.components.qlock = Ractive.extend({ // jshint ignore:line
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
  template: `
<pre>
<led on="true">IT</led>L<led on="true">IS</led>BFAMPM
<led on="{{quarter}}">A</led>C<led on="{{quarter}}">QUARTER</led>DC
<led on="{{twentyMinutes}}">TWENTY</led><led on="{{fiveMinutes}}">FIVE</led>X
<led on="{{half}}">HALF</led>B<led on="{{tenMinutes}}">TEN</led>F<led on="{{to}}">TO</led>
<led on="{{past}}">PAST</led>ERU<led on="{{h == 9}}">NINE</led>
<led on="{{h == 1}}">ONE</led><led on="{{h == 6}}">SIX</led><led on="{{h == 3}}">THREE</led>
<led on="{{h == 4}}">FOUR</led><led on="{{h == 5}}">FIVE</led><led on="{{h == 2}}">TWO</led>
<led on="{{h == 8}}">EIGHT</led><led on="{{h == 11}}">ELEVEN</led>
<led on="{{h == 7}}">SEVEN</led><led on="{{h == 0}}">TWELVE</led>
<led on="{{h == 10}}">TEN</led>SE<led on="{{oclock}}">OCLOCK</led>
<led on="{{oneMinute}}">.</led>  <led on="{{twoMinutes}}">.</led>  <led on="{{threeMinutes}}">.</led>  <led on="{{fourMinutes}}">.</led>
</pre>
`
});
