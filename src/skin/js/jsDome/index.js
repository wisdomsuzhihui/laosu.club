var indexModel = new Vue({
  el: '#indexModle',
  data:{
    title:'第一部分 基础知识',
    list:[{
      pName:'点击水波效果',
      pList: [
        {
        url: '/jsDemo/1/1.html',
        title: '点击水波效果'
        },
        {
          url:'/jsDemo/1/2.html',
          title:'老三的要布局'
        }
      ]
    }]
  }
})