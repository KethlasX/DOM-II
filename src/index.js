import { loadOptions } from '@babel/core'
import './less/index.less'
import { body } from 'msw/lib/types/context'

// Your code goes here!
// 1- load
window.addEventListener('load', evt => {
 console.log("page is fully loaded")
})
// 2- click
document.body.addEventListener('click', evt => {
 evt.target.classList.toggle('mirror')
})
// 3- dblclick
document.body.addEventListener('dblclick', evt => {
 evt.target.outerHTML = ''
})
// 4- mouseover
document.body.addEventListener('mousedown', evt => {
 const {clientX, clientY} = evt
})
// 5- afterprint
window.addEventListener("afterprint", evt => {
  console.log("After print");
});
// 6- error
window.addEventListener("error", evt => {
  log.textContent = `${log.textContent}${evt.type}: ${evt.message}\n`;
  console.log(evt);
});
// 7- keydown
window.addEventListener('keydown', evt => {
 if (evt.key == 6) {
  document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
 }
})
// 8- online
window.addEventListener("online", evt => {
 console.log("You are now connected to the network.");
});
// 9- offline
window.addEventListener("offline", evt => {
 console.log("The network connection has been lost.");
});
// 10- copy
window.addEventListener("copy", evt => {
 console.log("copy action initiated");
});
// 11 - load 
window.onload = function (evt) {
 console.log('event ${evt.type} fired! Ready to go!')
 const heading = document.querySelector('h1')
 heading.textContent = 'READY TO GO!!'
}