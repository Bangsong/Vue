Vue.component('my-component1',{
    template:`<div>全局注册组件</div>`
});
let MyComponent=Vue.extend({
    template:`<div>手动挂载组件</div>`
});
new MyComponent().$mount("#comID");
const bus = new Vue();
const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        msg:'动态绑定父组件数据',
        num:123,
        comView:'my-component2'
    },
    mounted:function(){
      let _this=this; 
      bus.$on('on-message',function (val) {
          _this.msg=val;
      })
    },
    methods:{
        getNumber:function (val) {
          this.num = val;
      },
        getChildVal:function () {
            console.log(this.$refs.com1.msg);
        },
        changeCom:function (id) {
            this.comView = "my-component" + id;
        }
    },
    components:{
        'my-component2':{
            template:`<div>局部注册组件</div>`
        },
        'my-component3':{
            template:`<div>{{msg}}</div>`,
            data:function () {
                return {
                    msg:"组件中使用data"
                }
            }
        },
        'my-component4':{
            template:`<div>{{message}}</div>`,
            props:['message']
        },
        'my-component5':{
            template:`<div>{{msg}}</div>`,
            props:['message'],
            data:function () {
                return {
                    msg:this.message+'双向绑定'
                }
            }
        },
        'my-component6':{
            template:`<div :style="style">计算属性实现props双向绑定</div>`,
            props:['width'],
            computed:{
                style:function () {
                    return {
                        width:this.width+'px'
                    }
                }
            }
        },
        'my-component7':{
            template:`<div>{{count}}</div>`,
            props:{
                propA:Number,//必须为数字
                propB:[String,Number],//必须为字符串或数字
                propC:{//布尔值，若没定义则默认为true
                    type:Boolean,
                    default:true
                },
                propD:{//数字，必传
                    type:Number,
                    required:true
                },
                propE:{//若是数组或对象，默认值必须是一个函数来返回
                    type:Array,
                    default:function () {
                        return [];
                    }
                },
                propF:{//自定义验证函数
                    validator:function (value) {
                        return value>10;
                    }
                }
            },
            data:function () {
                return {
                    count:propA
                }
            }
        },
        'my-component8':{
            template:`<div>{{count}}</div>`,
            props:{
                propData:Number
            },
            data:function () {
                return {
                    count:this.propData
                }
            }
        },
        'my-component9':{
            template:`
            <div>
            <button @click="add">+1</button>
            <button @click="sub">-1</button>
            </div>`,
            props:{
                number:{
                type:Number,
                default:0
                }
            },
            data:function () {
                return {
                    count:this.number
                }
            },
            methods:{
                add:function () {
                    this.$emit('increase',++this.count);
                },
                sub:function () {
                    this.$emit('reduce',--this.count);
                }
            }
        },
        'my-component10':{
            template:`<button @click="add">+1</button>`,
            props:{
                number:{
                    type:Number,
                    default:0
                }
            },
            data:function () {
                return {
                    count:this.number
                }
            },
            methods:{
                add:function () {
                    this.$emit('input',++this.count);
                }
            }
        },
        'my-component11':{
            template:`<button @click="change">改变</button>`,
            methods:{
                change:function () {
                    bus.$emit('on-message',"来自子组件内容");
                }
            }
        },
        'my-component12':{
            template:`<div>{{msg}}</div>`,
            data:function () {
                return {
                    msg:this.$parent.msg
                }
            }
        },
        'my-component13':{
            template:`<div>
                <slot>slot：父组件没有内容时，作为默认显示</slot>
            </div>`
        },
        'my-component14':{
            template:`<div class="contatiner">
                <div class="header">
                    <slot name="header"></slot>
                </div>
                <div class="main">
                    <slot></slot>
                    <slot msg="作用域插槽"></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>`
        },
        'my-component15':{
            name:'my-component15',
            template:`<div>递归组件<my-component15 :count="count+1" v-if="count < 3"></my-component15></div>`,
            props:{
                count:{
                    type:Number,
                    default:1
                }
            }
        },
        'my-component16':{
            data:function () {
                return {
                    message:"子组件声明的数据"
                }
            }
        },
        'my-component17':function (resolve,reject) {
            window.setTimeout(function () {
                resolve({
                    template:`<div>异步组件</div>`
                })
            },3000);
        },
        'my-component18':{
            template:`<div>
                <p id="text" v-if="isShow">$nextTick</p>
                <button @click="getHTML">获取元素内容</button>
                </div>`,
            data:function(){
                return {
                    isShow:false
                }
            },
            methods:{
                getHTML:function () {
                    this.isShow = true;
                    this.$nextTick(function () {
                       var text = document.getElementById('text').innerHTML;
                       console.log(text);
                    });
                }
            }
        },
        'my-component19':{
            template:'#my-component19'
        },
    }
});