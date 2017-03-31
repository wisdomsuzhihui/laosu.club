/*
http://www.kancloud.cn/dennis/javascriptmethod/261501
*/






function ripple (event, $this) {
  event = event || window.event;
  /* 
    获取鼠标位置
    pageX/Y获取到的是触发点相对文档区域左上角距离，会随着页面滚动而改变，||后面的代码是为了兼容IE。
  */
  var x = event.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + event.clientX;
  var y = event.pageY || document.documentElement.scrollTop + document.body.scrollTop + event.clientY;

  // 上面的x和y获取的是相对于文档的鼠标位置，而transform默认是以元素的中心点来转换的，所以我们需要获取相对位置，也就是波纹元素中心点相对于按钮中心点的位置。
  var wx = $this.offsetWidth;
  x = x - $this.offsetLeft - wx / 2;
  y = y - $this.offsetTop - wx / 2;
  var transition="transition",
      body=document.body || document.documentElement,
      style=body.style;

  // 添加.ripple元素
  var ripple = document.createElement('span');
  ripple.className = 'ripple';
  var firstChild = $this.firstChild;
  if(firstChild){
    $this.insertBefore(ripple,firstChild);
  }else{
    $ths.appendChild(ripple);
  };

  ripple.style.cssText = 'width: ' + wx + 'px;height: '+ wx + 'px;top: '+ y + 'px;left: ' + x + 'px';
  ripple.classList.add('rippleEffect');

  // 加浏览器后缀
  var vendorPrefix = (function () {
    var i = 0, vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
    transition = transition.charAt(0).toUpperCase() + transition.substr(1);
    while (i < vendor.length) {
      if (typeof style[vendor[i] + transition] === "string") {
        return vendor[i];
      }
      i++;
    }
    return false;
  })();

  // 监听动画结束，删除波纹元素
  var animationEnd = (function  () {
    if (vendorPrefix == "Webkit") {
      return "webkitAnimationEnd";
    } else {
      return "animationend";
    }
  }());
  // animationEnd(ripple,function  () {
  //   this.parentNode.removeChild(ripple);
  // });
  addEvent(ripple,'animationEnd',function  () {
    this.parentNode.removeChild(ripple);
  })
};
var addEvent = function (element, type, callback) {
  if (element.addEventListener) {
    element.addEventListener(type, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback)
  }
} 

var btn = document.querySelectorAll('.ripple-effect');
for (var i = 0; i < btn.length; i++) {
    addEvent(btn[i], 'click',
    function(e) {
        ripple(e, this);
    });
}

