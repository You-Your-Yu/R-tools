(function(){
  'use strict';

  let vm = new Vue({
     el: '#app',
     data: {
       attack: 5000,
       damage: 5000,
     },
     computed: {
      defense: {
        get: function () {
          return Math.round(100 * (this.attack / this.damage - 1))
        },
        set: function (defense) {
          this.damage = Math.round(this.attack / (1 + defense / 100))
        }
      },
    }
  })

}())