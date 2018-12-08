Vue.component('my-component',{
    template:`<div class="fontStyle">组件</div>`
});
const vm = new Vue({
    el:'#app',
    data: {
        indexUrl:'/vue/practice1/index.html',
        msg: "class绑定",
        isBg: true,
        isError:true,
        bg:'bg',
        fontStyle: 'fontStyle',
        color:'red',
        fontSize:30,
        styles:{
            color:'red',
            fontSize:20+'px'
        }
    },
    computed:{
        classes:function () {
            return {
                bg:this.isBg,
                fontStyle:!this.isError
            }
        },
        styled:function () {
            return {
                color:'red',
                fontSize:30+'px'
            }
        }
    }
});