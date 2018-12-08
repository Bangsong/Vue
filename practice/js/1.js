const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        msg:'数据绑定',
        msg1:`<div style="color:red;">数据绑定</div>`,
        msg2:'aaaa',
        number:2
    },
    filters:{
        formatStr:(str)=> str.toUpperCase(),
        formatNum3:(number)=> number%3?number*3:number,
        formatNum7:(number)=> number%7?number*7:number,
        formatNum:(number,PI)=>number*PI
    }
});