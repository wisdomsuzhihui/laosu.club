var dibuModel = new Vue({
  el: '#dibu',
  data:{
    title:''
  },
  computed:{

  },
  updated: function  () {
  },
  methods:{
    setWarpH: function  () {
      var warp = document.querySelector('#container');
      var iH = laosu.Ev._setHeight(warp,[document.getElementById('header'), document.getElementById('dibu')]);
      warp.style.minHeight=iH+'px';
      
    }
  },  
  created:function  () {
    var _this = this;
    _this.setWarpH();
    // 关于URL编码/javascript/js url 编码/url的三个js编码函数:
    // http://www.cnblogs.com/huzi007/p/4174519.html 
    _this.title = document.title = decodeURI(window.location.href.split('?title=')[1] || window.location.pathname.split('/')[1]);
    // console.log(_this.title);
  }
})