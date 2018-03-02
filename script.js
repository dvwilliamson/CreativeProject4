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
        title: 'Your Mask'
      },
      3: {
        href: '#two',
        title: 'Practice'
      },
      4: {
        href: '#three',
        title: 'Locos Luchas'
      }
    },
  },
});

var appTwo = new Vue({
  el: '#three',
  data: {
    curIndex:0,
    images: [
      "https://i.pinimg.com/originals/be/fd/9c/befd9ccaae0506b8520923e83b05e1ab.jpg",
      "https://laughingsquid.com/wp-content/uploads/2014/01/june-catcheur.jpg",
      "https://i.pinimg.com/736x/e2/93/0d/e2930d2c8b3e8cdf293ec73bf876f13b--funny-ha-ha-hilarious.jpg",
      "https://i.pinimg.com/originals/08/10/1d/08101d73bcdbcef0587a6c91e6e93fea.jpg",
      "https://i.pinimg.com/originals/72/fc/21/72fc21af42ab64f30973066b5a1ec673.jpg",
      "https://i.pinimg.com/736x/60/f0/b0/60f0b00247a894e1b1be717e88c0f83a--nachos-funny-movies.jpg",
      "https://img.buzzfeed.com/buzzfeed-static/static/2015-12/10/22/enhanced/webdr08/enhanced-1782-1449804533-7.jpg?downsize=715:*&output-format=auto&output-quality=auto",
      "http://img-9gag-fun.9cache.com/photo/a0Y14Nn_700b.jpg",
      "https://i.pinimg.com/564x/22/3f/eb/223feb68cc0bbea2d3885bbb920dcd28.jpg",
      "https://i.pinimg.com/564x/6e/e2/7d/6ee27dfe2618f3c9f76489900782bc3e.jpg",
      "https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr04/14/8/original-20923-1400069345-14.jpg",
      "https://i.pinimg.com/originals/ef/ee/19/efee19a12f09ee90ee4b308e0f196949.jpg",
      "https://i.pinimg.com/originals/4d/22/8b/4d228b7c3782420d00153fb35b80aa79.jpg",
      "https://img.buzzfeed.com/buzzfeed-static/static/2014-08/11/14/enhanced/webdr05/anigif_enhanced-6930-1407782075-5.gif",
      "http://images4.fanpop.com/image/photos/15000000/LiL-Nacho-libre-nacho-libre-15086120-319-426.jpg",
      "https://media.giphy.com/media/CKY2egPIpnBT2/giphy.gif",
      "http://media.fakeposters.com/results/2013/03/29/zplx0l3qtw.jpg",
      "http://littlegreenfootballs.com/weblog/img/wrenchwench/2011/01/04/lucha_libre.jpg"
    ]
  },
  methods:{
    next: function() {
      if (this.curIndex >= this.images.length - 1)
        this.curIndex = 0;
      else this.curIndex += 1;
    },
    prev: function(){
      if (this.curIndex <= 0)
        this.curIndex = this.images.length - 1;
      else this.curIndex -= 1;
    },
    getRand: function(){
      var oldIndx = this.curIndex;
      while(this.curIndex === oldIndx)
        this.curIndex = Math.floor(Math.random() * (this.images.length - 1));
    }
  },
});


var appOne = new Vue({
  el: '#one',
  data: {
    curIndex: 0,
    images: {
      0:{
        url: "/CreativeProject4/images/masks/la_muerte.svg",
        title:"La muerte",
        description: "This mask is the manliest of the manliest that can only be \
        ventured by those who are worthy of its power. The golden skull \
        symbolizes Xolotl, the ancient aztec god of death. Fear by to any \
        man who dare challenge the man wearing this mask.",
        active: "",
      },
      1:{
        url: "/CreativeProject4/images/masks/armadillo.svg",
        title: "El armadillo",
        description: "Small, round, and fast, the bearer of this mask is \
        a force to be reckoned with.",
        active: "",
      },
      2:{
        url: "/CreativeProject4/images/masks/estrella_grande.svg",
        title:"La estrella grande",
        description: "This mask is for the ambitious underdog that once was \
        told to shoot for the moon and even if he missed he would land among \
        the start. Sadly, he did miss the moon and now he's willing to do \
        anything to regain his honor. His thirst for winning is unquenchable.",
        active: "",
      },
      3:{
        url: "/CreativeProject4/images/masks/la_fila.svg",
        title: "La batería",
        description: "Whoever wears this mask has a electric boost that \
        allows him to gain the upper-hand against his foes.",
        active: "",
      },
      4:{
        url: "/CreativeProject4/images/masks/blue_demon.svg",
        title: "Demonio Azul",
        description: "This is the mask that once belonged to Alejandro Muñoz Moreno, \
        a very formidable foe. There is no lucha libre tournament without one of these \
        classic faces.",
        active: "",
      },
    },
  },
  created: function(){
    this.curIndex = 0;
    this.images[this.curIndex].active = true;
  },
  watch:{
    curIndex: function(newVal, oldVal) {
      maxLen = Object.keys(this.images).length
      if (this.curIndex >= maxLen)
        this.curIndex = 0;
      else if (this.curIndex < 0)
        this.curIndex = maxLen - 1;

      if (oldVal < 0) oldVal = 0;
      else if (oldVal >= maxLen) oldVal = maxLen - 1;

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




















