function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  var lis = document.getElementByApp('main').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    var int = parseInt(lis[i], 10)
    return int + 1
  }
}
