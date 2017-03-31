
// http://www.jb51.net/article/82726.htm JS动态创建元素的两种方法
window.onload = function () {
  var title = document.createElement('h1');
  title.innerHTML = dibuModel.title;
  title.className = 'title'
  var container = document.getElementById('container');
  if (container.children[0]) {
    container.insertBefore(title,container.children[0])
  } else {
    container.appendChild(title);
  }
}

