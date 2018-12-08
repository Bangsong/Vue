Vue.component('t-button',{
    template:`<button :style="color:cColor">{{cText}}</button>`,
    props:{
        tColor:{
            type:String,
            default:'#fff'
        },
        tText:{
            type:String,
            default:'按钮'
        }
    },
    data:function () {
        return {
            cText:this.tText
        }
    },
    computed:function () {
        return {
            cColor: this.tColor
        }
    }
});