const vm = new Vue({
  el:"#app",
  data:{
      indexUrl:'/vue/practice1/index.html',
    orderList:[
      {
        title:"电子产品",
        name:"electronics",
        data:[
          {order_id:"41289312782",order_name:"iphone 7s",money:5999,count:1},
          {order_id:"23123543534",order_name:"iphone xs",money:8999,count:1},
          {order_id:"54332454334",order_name:"Mac book Pro",money:12999,count:1},
          {order_id:"45345312123",order_name:"PS游戏",money:3999,count:1},
          {order_id:"56456467333",order_name:"雷神电脑",money:8999,count:1},
          {order_id:"12353456344",order_name:"外星人电脑",money:11999,count:1},
          {order_id:"23151334674",order_name:"牧马人机械键盘",money:499,count:1},
          {order_id:"78567945956",order_name:"罗技游戏鼠标",money:699,count:1}
        ]
      },
      {
        title:"小零食",
        name:"snacks",
        data:[
         {order_id:"45131212123",order_name:"泡面",money:5,count:1},
         {order_id:"23415245241",order_name:"辣条",money:2,count:1},
         {order_id:"53543456542",order_name:"火腿肠",money:12,count:1},
         {order_id:"64545454642",order_name:"卤蛋",money:2,count:1},
         {order_id:"42315672532",order_name:"泡椒鸡爪",money:6,count:1},
         {order_id:"79435351252",order_name:"干吃面",money:2,count:1},
         {order_id:"34332352697",order_name:"饼干",money:4,count:1},
         {order_id:"54352126723",order_name:"面包",money:6,count:1}
        ]
      }
   ],
    checkboxed:[],
    title:'title'
  },
  computed:{
    total:function() {
      let orderList = this.orderList;
      let sum = 0;
      for (orders of orderList) {
        for (order of orders.data) {
          for (checkbox of this.checkboxed) {
            if(checkbox == order.order_id){
              sum += order.money*order.count;
            }
          }
        }
      }
      return sum;
    }
  },
  methods:{
    sub:function(order_id){
      for(var orders of this.orderList){
        for (var order of orders.data) {
          order.order_id == order_id?order.count--:0;
        }
      }
    },
    add:function(order_id){
      for(var orders of this.orderList){
        for (var order of orders.data) {
          order.order_id == order_id?order.count++:0;
        }
      }
    },
    del:function(order_id){
      let orderList = this.orderList;
      for (var i = 0; i < orderList.length; i++) {
        let orders = orderList[i];
        for (var j = 0; j < orders.data.length; j++) {
          let order = orders.data[j];
          order.order_id == order_id?orders.data.splice(j,1):0;
        }
        orders.data.length == 0?orderList.splice(i,1):0;
      }
    },
    checkAll:function(name){
      var checked = document.getElementById(name).checked;
      let orderList = this.orderList;
      for(orders of orderList){
        if(orders.name == name){
          for(order of orders.data){
            if(checked)
              this.checkboxed.push(order.order_id);
            else{
              for (var i = 0; i < this.checkboxed.length; i++) {
                order.order_id == this.checkboxed[i]?this.checkboxed.splice(i,1):0;
              }
            }
          }
        }
      }
    }
  }
});
