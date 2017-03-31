var Util = function() {
  // 事件
  function Ev() {
    var Ev = {}
    Ev.loadJsLock = false;
    return Ev.prototype = {
      // 分享：https://github.com/zhansingsong
      // _share: function(ele) {
        
      // }

      // 设置高度
      _setHeight: function  (obj,arr) {
        var oH = document.documentElement.clientHeight || document.body.clientHeight,
        cutH = 0;
        if(arr.length){
          for(var i = 0; i< arr.length; i++){
            if(this._getStyle(arr[i],'marginTop')&& this._getStyle(arr[i],'marginTop')!=='auto'){
              cutH += parseInt(this._getStyle(arr[i],'marginTop'))
            }
            cutH += arr[i].clientHeight;
          }
        }
        
        return oH - cutH;
      },
      _getStyle: function (obj, attr) {
        if (obj.currentStyle) {
          return obj.currentStyle[attr];
        }
        else {
          return document.defaultView.getComputedStyle(obj, null)[attr];
        }
      } 

    }
  }
  var Tools = {};
  return Tools.Ev = Ev(),
         Tools
}

window.laosu = Util();
