var app = new Vue({
  el: '#app',
  data: {
    navItems: {
      1: {
        href: '#intro',
        title: 'Intro'
      },
      2: {
        href: '#one',
        title: 'What is cool?'
      },
    },
  },
  created: function() {
    //this.xkcd();
  },
  computed: {
    month: function() {
      var month = new Array;
      if (this.current.month === undefined)
        return '';
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      return month[this.current.month - 1];
    }
  },
  watch: {
    number: function(value,oldvalue) {
      //if (oldvalue === '') this.max = value;
      //else this.xkcd();
    },
  },
  methods: {
    apiCall: function() {
      this.loading = true;
      //var url="https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=luchador";
      fetch(url).then(response => {
        return response.json();
      }).then(json => {
        console.log(json);
        return true;
      }).catch(err => {
        console.log("Nooo!.1.1>");
      });
    },
  }
});





















