new Vue({
  el: '#app',
  data: {
    arraySomething:[],
    something:'',
  },
  methods:{
    submit:function(){
      this.arraySomething.push(this.something);
    },
    deleteEvent: function(i) {
      this.arraySomething = this.arraySomething.filter((element,index)=>{
         return index !== i
    })
  }
}
});

Vue.config.devtools = true;
