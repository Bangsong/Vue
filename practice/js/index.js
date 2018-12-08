const vm = new Vue({
    el:"#app",
    data:{
        practiceList:[
            {
                name:"第2章：数据绑定",
                url:"./html/1.html",
                data:[
                    {name:"生命周期：created、mounted、beforeDestroy"},
                    {name:"大括号{{}}文本插值"},
                    {name:"v-html网页元素插值"},
                    {name:"v-model表单元素数据绑定"},
                    {name:"v-pre取消文本插值"},
                    {name:"过滤器filters:支持多个filters、还可以接受参数"},
                ]
            },
            {
                name:"指令和事件",
                url:"./html/2.html",
                data:[
                    {name:"前缀为v-的都是指令"},
                    {name:"v-bind指令：动态更新HTML元素的属性，语法糖是:"},
                    {name:"v-on指令：绑定事件监听器，语法糖是@，事件函数在methods中写"},
                ]
            },
            {
                name:"第3章：计算属性",
                url:"./html/3.html",
                data:[
                    {name:"计算属性：基础属性加工之后的数据,computed中以函数的方式存在"},
                    {name:"计算属性是基于它的依赖缓存，依赖数据发生变化时，才会重新取值"},
                ]
            },
            {
                name:"第4章：v-bind及class与style绑定",
                url:"./html/4.html",
                data:[
                    {name:"v-bind:class用于绑定class，可用语法糖:class"},
                    {name:"计算属性是基于它的依赖缓存，依赖数据发生变化时，才会重新取值"},
                    {name:"动态绑定class：对象语法"},
                    {name:"使用计算属性绑定多个class"},
                    {name:"数组语法"},
                    {name:"三元运算符：只能用于数组语法中"},
                    {name:"组件使用:class"},
                    {name:"绑定内联样式:CSS属性名使用驼峰或短横分割命名"},
                    {name:"一般情况下，在data或computed中写style"},
                ]
            },
            {
                name:"第5章：内置指令",
                url:"./html/5.html",
                data:[
                    {name:"v-cloak"},
                    {name:"v-once"},
                    {name:"v-if、v-else-if、v-else"},
                    {name:"v-show"},
                ]
            },
            {
                name:"综合练习1：购物车综合实例",
                url:"./html/6.html"
            },
            {
                name:"第6章：表单和v-model",
                url:"./html/7.html",
                data:[
                    {name:"v-model：数据双向绑定"},
                    {name:"单选按钮：v-model和value配合使用实现互斥"},
                    {name:"多选按钮：v-model和value配合使用实现多选,v-model绑定的是一个数组"},
                    {name:"下拉选项：v-model优先匹配option的value然后是text。添加multiple属性实现多选"},
                    {name:"v-bind动态绑定"},
                    {name:".lazy：使数据绑定发生在change事件中，失去焦点或回车才更新"},
                    {name:'.number：将输入转为Number类型'}
                ]
            },
            {
                name:"第7章：组件",
                url:"./html/8.html",
                data:[
                    {name:"构成组件3个API：props传递数据、events触发事件($emit、$on)、slot内容分发"},
                    {name:"组件注册：全局注册：Vue.component('组件名',{...})、局部注册:components"},
                    {name:"组件解除受限(table下只能是tr、ul下只能是li等)，可以使用is绑定组件"},
                    {name:"组件使用data：data必须是函数且将数据return，可防止多个组件共用一个数据"},
                    {name:"接收父组件数据用props，方式：字符串数组、对象"},
                    {name:"在DOM上使用props时，驼峰命名的props名要转为短横分隔命名"},
                    {name:"动态绑定父组件的数据，使用v-bind"},
                    {name:"Vue2.x中props传递数据是单向的"},
                    {name:"子组件要修改props，则可用data在组件再声明一个数据，引用父组件的prop"},
                    {name:"props实现双向则在子组件中使用计算属性"},
                    {name:"当props数据需要验证时，使用对象方法"},
                    {name:"组件通信-父子间通信：子组件用$emit()触发事件，父组件用$on()监听.父组件使用v-on来监听"},
                    {name:"组件通信-父子间通信：使用v-model"},
                    {name:"组件通信-父子间通信：v-model实现双向绑定的组件条件：接收一个value属性，有新的value时触发事件"},
                    {name:"组件通信-非父子间通信：创建一个空Vue实例作为中介，子组件触发事件和父组件监听事件都是通过中介操作"},
                    {name:"可以t使用this.$parent来直接访问父组件，用this.$children访问子组件"},
                    {name:"子组件索引：通过指定组件属性ref来访问子组件：this.$refs.ref值"},
                    {name:"slot：可以简单理解为组件内容，单个slot表示当父组件内无内容是显示slot中的内容"},
                    {name:"具名slot：可以和单个slot共存，定义组件时指定name属性，使用组件时指定slot属性"},
                    {name:"作用域插槽：特殊的slot，使用一个可以复用的模板替换已渲染元素,使用template并指定scope属性值(值任意)"},
                    {name:"使用this.$slots访问slot"},
                    {name:"递归组件：自己调用自己。给组件设置name即可"},
                    {name:"内联模板：父组件添加inline-template"},
                    {name:"动态组件：通过is属性动态挂载"},
                    {name:"异步组件：resolve加载"},
                    {name:"$nextTick：用于动态更新DOM时，DOM未更新完而导致获取元素失败"},
                    {name:"X-Templates:在js中创建vue组件，然后在实例或全局通过id引用注册"},
                    {name:"手动挂载实例：Vue.extend和$mount"}
                ]
            },
            {
                name:"综合练习2：数字输入框组件",
                url:"./html/9.html"
            },
            {
                name:"综合练习3：标签页控件",
                url:"./html/10.html"
            },
            {
                name:"第8章：自定义指令",
                url:"./html/11.html",
                data:[
                    {name:"自定义指令注册分为全局注册：Vue.directive('指令名',{指令选项})和局部注册：directives:{指令名:{指令选项}}"},
                    {
                        name:"自定义指令的选项由几个钩子函数组成：bind、inserted、update、componentUpdated、unbind",
                        list:[
                            {name:"bind:只调用一次，指令第一次绑定到元素时调用"},
                            {name:"inserted:被绑定元素插入父节点时调用(父节点存在即可，不需要存在document中)"},
                            {name:"update:被绑定元素所在的模板更新时调用，而不论绑定值是否变化"},
                            {name:"componentUpdated:被绑定元素所在模板完成一次更新周期时调用"},
                            {name:"unbind:只调用一次，指令与元素解绑时调用"}
                        ]
                    },
                    {
                        name:"钩子函数参数：el、binding、name、value、oldValue、expression、arg、modeifiers、vnode、oldVnode",
                        list:[
                            {name:"el:指令所绑定的元素，可用来直接操作dom"},
                            {name:"binding:一个对象，包含属性：name(指令名，不包含v-)、value(指令的绑定值)、oldValue(指令绑定的前一个值，仅在update和componentUpdated可用(无论值是否改变))、expression(绑定值的字符串形式)、modifiers(一个包含修饰符的对象)"},
                            {name:"vnode:Vue编译生成的虚拟节点"},
                            {name:"oldVnode:上一个虚拟节点仅在update和componentUpdated中可用"}
                        ]
                    }

                ]
            },
            {
                name:"综合练习4：外部关闭的下拉菜单",
                url:"./html/12.html"
            },
            {
                name:"综合练习5：实时时间转换指令v-time",
                url:"./html/13.html"
            },
            {
                name:"综合练习6：问卷调查",
                url:"./html/14.html"
            },
        ]
    }
});