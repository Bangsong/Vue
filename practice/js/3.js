const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        number:1
    },
    computed:{
        numbered:function () {
            return this.number*2;
        }
    }
});