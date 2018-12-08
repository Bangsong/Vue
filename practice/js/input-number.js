function isValueNumber(val){
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)|(^-?0{1}$)/).test(val+'');
}
Vue.component('input-number',{
    template:`
<div>
    <input type="text" :value="comValue" @change="valChange" @keyup.up="add" @keyup.down="sub">        
    <button @click="sub" :disabled="comValue == min">-1</button>
    <button @click="add" :disabled="comValue == max">+1</button>
</div>
    `,
    props:{
        value:{
            type:Number,
            default:0
        },
        min:{
            type:Number,
            default:-Infinity
        },
        max:{
            type:Number,
            default:Infinity
        },
        step:{
            type:Number,
            default:1
        }
    },
    data:function () {
        return {
            comValue:this.value,
            comstep:this.step
        }
    },
    watch:{
        comValue:function (val) {
          this.$emit('input',val);
          this.$emit('0n-change',val);
        },
        value:function (val) {
            this.updateValue(val);
        }
    },
    methods:{
        sub:function () {
            this.comValue-=this.comstep;
        },
        add:function () {
            this.comValue+=this.comstep;
        },
        updateValue:function (val) {
            val = val < this.min?this.min:val;
            val = val > this.max?this.max:val;
            this.comValue = val;
        },
        valChange:function (event) {
            let val = event.target.value.trim();
            if(isValueNumber(val)){
                val = Number(val);
                this.comValue = val;
                if(val > this.max){
                    this.comValue = this.max;
                }
                else if(val < this.min){
                    this.comValue = min;
                }
                else{
                    event.target.value = this.comValue;
                }
            }
        }
    },
    mounted:function () {
        this.updateValue(this.value);
    }
});