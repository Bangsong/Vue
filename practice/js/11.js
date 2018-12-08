Vue.directive('f',{
    inserted:function (el) {
        el.focus();
    }
});
const vm = new Vue({
    el:'#app',
    data:{
        indexUrl:'/vue/practice1/index.html',
        message:'测试'
    },
    directives:{
        focus:{
            inserted:function (el) {
                setTimeout(function () {
                    el.focus();
                },2000);
            }
        },
        test:{
            bind:function (el,binding,vnode) {
                let keys = [];
                for (var i in vnode){
                    keys.push(i);
                }
                el.innerHTML=
                    'name:'+binding.name+'<br>'+
                    'value:'+binding.value+'<br>'+
                    'expression:'+binding.expression+'<br>'+
                    'argument:'+binding.arg+'<br>'+
                    'modifiers:'+JSON.stringify(binding.modifiers)+'<br>'+
                    'vnode keys :'+keys.join(',');
            }
        }
    }
});