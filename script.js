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




















