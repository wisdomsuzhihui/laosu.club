var indexModel = new Vue({
  el: '#indexModle',
  data:{
    title:'第一部分 基础知识',
    list:[{
      pName:'第 1 章 面向对象的 JavaScript',
      pList: [{
          url: '/javascript/1/1.1.html',
          title: '动态类型语言和鸭子类型'
        },{
          url: '/javascript/1/1.2.html',
          title: '多态'
        },{
          url: '/javascript/1/1.3.html',
          title: '封装'
        },{
          url: '/javascript/1/1.4.html',
          title: '原型模式和基于原型继承的 JavaScript 对象系统'
      },]
    },{
      pName:'第 2 章 this 、 call 和 apply',
      pList: [
        {
          url: '/javascript/2/1.1.html',
          title: 'this'
        },{
          url: '/javascript/2/1.2.html',
          title: '丢失的 this'
        },{
          url: '/javascript/2/2.1.html',
          title: 'call 和 apply 的区别'
        },{
          url: '/javascript/2/2.2.html',
          title: 'call 和 apply 的用途'
        },
      ]
    },{
      pName:'第 3 章 闭包和高阶函数',
      pList: [
        {
          url: '/javascript/3/1.1.html',
          title: '3.1.1 闭包,变量的作用域'
        },{
          url: '/javascript/3/1.2.html',
          title: '3.1.2 变量的生存周期'
        },{
          url: '/javascript/3/1.3.html',
          title: '3.1.3 闭包的更多作用'
        },{
          url: '/javascript/3/1.4.html',
          title: '3.1.4 闭包和面向对象设计'
        },{
          url: '/javascript/3/1.5.html',
          title: '3.1.5 用闭包实现命令模式'
        },{
          url: '/javascript/3/2.1.html',
          title: '3.2.1 函数作为参数传递'
        },{
          url: '/javascript/3/2.2.html',
          title: '3.2.2 函数作为返回值输出'
        },{
          url: '/javascript/3/2.3.html',
          title: '3.2.2 高阶函数实现AOP'
        },{
          url: '/javascript/3/2.4.html',
          title: '3.2.4 高阶函数的其他应用'
        },
      ]
    },{
      pName: '第 4 章 单例模式',
      pList: [
        {
          url: '/javascript/4-单例模式/1.1.html',
          title: '4.1 实现单例模式'
        },
        {
          url: '/javascript/4-单例模式/1.2.html',
          title: '4.2 透明的单例模式'
        },
        {
          url: '/javascript/4-单例模式/1.3.html',
          title: '4.3 用代理实现单例模式'
        },
        {
          url: '/javascript/4-单例模式/1.4.html',
          title: '4.4 JavaScript 中的单例模式'
        },
        {
          url: '/javascript/4-单例模式/1.5.html',
          title: '4.5 惰性单例'
        },
      ]
    },{
      pName:'第 15 章 装饰者模式',
      pList:[
        {
          url: '/javascript/15/1.1.html',
          title: '15.1.1 闭包,变量的作用域'
        },{
          url: '/javascript/15/1.3.html',
          title: '15.3 回到 JavaScript 的装饰者'
        },{
          url: '/javascript/15/1.4.html',
          title: '15.4 装饰函数'
        },{
          url: '/javascript/15/1.5.html',
          title: '15.5 用 AOP 装饰函数'
        },
      ]
    }],
  }
})