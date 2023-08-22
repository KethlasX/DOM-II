

// Your code goes here!

// const { disableValidation } = require("schema-utils")

// 1- load WORKING
window.addEventListener('load', evt => {
 console.log("page is fully loaded 1")
})
// 2- click WORKING
document.body.addEventListener('click', evt => {
 evt.target.classList.toggle('mirror')
 console.log('things are working 2')
})
// 3- dblclick WORKING
document.body.addEventListener('dblclick', evt => {
 evt.target.outerHTML = ''
 console.log('things are working 3')
})
// 4- hover WORKING
document.body.addEventListener('mouseover', evt => {
  evt.target.style.background = 'green';
  console.log('things are working 4')
})
// 5- keyup WORKING
document.body.addEventListener('keyup', evt => {
  console.log('things are working 5')
})

// 6- keydown WORKING
window.addEventListener('keydown', evt => {
  document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
  console.log('things are working 6')
})
// 7- pointerup WORKING
document.body.addEventListener('pointerup', (event) => {
  console.log('things are working 7')
})
// 8- zoom
document.body.addEventListener('click', evt => {
  evt.target.style.text = 'bold';
  console.log('things are working 8')
 })
// 9- click WORKING
document.body.addEventListener('dblclick', evt => {
  evt.target.style.text = 'pink'
  console.log('things are working 2')
 })
// 10- copy WORKING
window.addEventListener("copy", evt => {
 console.log("copy action initiated 10");
});