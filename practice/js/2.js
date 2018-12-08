const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        url:"2.html",
        number:0
    },
    methods:{
        sub:function(){
            this.number--;
        },
        add:function(){
            this.number++;
        }
    }
});