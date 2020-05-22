function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget(nested, target) {
  if (document.querySelector(`#${nested} .${target}`) === true) {
  return document.querySelector(`#${nested} .${target}`)
  }
  else {return object()}

}
