var appHeader = new Vue({
  el: '#appHeader',
  data: {
    navItems: {
      1: {
        href: '#intro',
        title: 'Welcome'
      },
      2: {
        href: '#one',
        title: 'What is cool?'
      },
    },
  },
});

var appOne = new Vue({
  el: '#one',
  data: {
    curIndex: 0,
    images: {
      0:{
        url: "/CreativeProject4/images/masks/la_muerte.svg",
        description: "",
        active: "",
      },
      1:{
        url: "/CreativeProject4/images/masks/armadillo.svg",
        description: "",
        active: "",
      },
      2:{
        url: "/CreativeProject4/images/masks/estrella_grande.svg",
        description: "",
        active: "",
      },
      3:{
        url: "/CreativeProject4/images/masks/la_fila.svg",
        description: "",
        active: "",
      },
      4:{
        url: "/CreativeProject4/images/masks/blue_demon.svg",
        description: "",
        active: "",
      },
    },
    luchMask: "/CreativeProject4/images/masks/la_muerte.svg",
  },
  created: function(){
  },
  watch:{
    curIndex: function(newVal, oldVal) {
      maxLen = Object.keys(this.images).length
      if (this.curIndex >= maxLen)
        this.curIndex = 0;
      else if (this.curIndex < 0)
        this.curIndex = maxLen - 1;
      this.luchMask = this.images[this.curIndex].url;

      this.images[oldVal].active = false;
      this.images[this.curIndex].active = true;

    }
  },
  methods:{
    next: function() {
      this.curIndex += 1;
    },
    prev: function(){
      this.curIndex -= 1;
    },
    goToMask: function(e, img){
      this.curIndex = parseInt(this.objectKeyByValue(this.images, img));
    },
    objectKeyByValue: function(obj, val) {
      return Object.entries(obj).find(i => i[1] === val);
    }

  },
});




















