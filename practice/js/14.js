const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        page:1,
        radioed:'',
        checked:[]
    },
    methods:{
        next:function () {
            this.page++;
        },
        reset:function () {
            this.page = 1;
            this.radioed = "";
            this.checked.splice(0,this.checked.length);
        }
    }
});