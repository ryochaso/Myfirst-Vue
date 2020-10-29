var app = new Vue({
	el:'#app',
  data: {
  	message: 'abc'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
   },
})
