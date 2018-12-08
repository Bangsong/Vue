const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        show:false
    },
    directives:{
        clickoutside:{
            bind:function (el,binding,vnode) {
                function documentHandler(e) {
                    if(el.contains(e.target)){
                        return false;
                    }
                    if(binding.expression){
                        binding.value(e);
                    }
                }
                el.__vueClickOutSide__=documentHandler;
                document.addEventListener('click',documentHandler);
            },
            unbind:function (el,binding) {
                document.removeEventListener('click',el.__vueClickOutSide__);
                delete el.__vueClickOutSide__;
            }
        }
    },
    methods:{
        handleClose:function () {
            this.show = false;
        }
    }
});