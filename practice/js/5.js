const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        msg:'v-once',
        number:5,
        isShow:true,
        list:[1,2,3,4,5]
    },
    methods:{
        add:function () {
            this.number++;
        }
    }
});