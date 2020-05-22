function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    var intNew = parseInt(lis[i].innerHTML, 10) + n
    lis[i].innerHTML = (intNew).toString();
  }
}

function deepestChild() {
  var list = document.getElementById('app').querySelectorAll('div#grand-node div')
  for (let i = 0; i < list.length; i++) {
    var item = list[i]
    item.querySelectorAll('div')
}
}
