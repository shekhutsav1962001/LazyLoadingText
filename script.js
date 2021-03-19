const loadText = document.querySelector('.loading-text')
const myText = document.querySelector('#mytext')

let load = 0
let int = setInterval(blurring, 25)
function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
    myText.style.opacity = 1
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // myText.style.opacity = 1-scale(load, 0, 100, 1, 0)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
