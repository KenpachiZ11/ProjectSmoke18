// let idSetTimeout = setTimeout(() => {
//     document.location.assign("owner.html");
// }, 10000);

// clearTimeout(idSetTimeout);


// let idSetTimeout = setTimeout(() => {
//     document.location.assign("owner.html");
//   }, 10000);
  
//   Метод для остановки setTimeout
//   clearTimeout(idSetTimeout);


// function funcCallBack() {
// 	window.location.assign("owner.html");
// };

// setTimeout(funcCallBack, 10000);


// let funcCallBack = setTimeout(() => {
//     window.location.assign("owner.html");
// }, 10000);



// function clear() {
//     setTimeout(funcCallBack, 9999);
// }
// let timerId = setTimeout( function() {
//         document.location.assign("owner.html");
// }, 10000);
// clearTimeout(timerId);

// let timerId = setInterval(function(){
//     document.location.assign("owner.html");
// }, 10000);

// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId);}, 1000);


// let idClock = setInterval(function(){
//     document.location.replace("owner.html");
// }, 10000);





function waitFunc(){
    document.location.replace("base.html");
    // break;
}    

let interval = window.setInterval(waitFunc, 10000);

// window.setTimeout(function(){
//     clearInterval(interval);
// },32000);