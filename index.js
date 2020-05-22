function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  #nested = {}
  .target = {}
  return document.querySelector(`#${nested} .${target}`)
}
