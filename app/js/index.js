const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('has-fade')

btnHamburger.addEventListener('click', function() {
    // console.log("works")
    // console.log(btnHamburger.classList);
    if (header.classList.contains('open')) { // cand inchizi meniul
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })
    }
    else { // cand deschizi meniul
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out'); 
        })
    }
});


// btnHamburger.addEventListener('click', function() {
//     // console.log("works")
//     // console.log(btnHamburger.classList);
//     if (header.classList.contains('open')) { // cand inchizi meniul
//         header.classList.remove('open');
//         fadeElems.forEach(function(element) {
//             element.classList.add('fade-out');
//             element.classList.remove('fade-in');
//         })
//     }
//     else { // cand deschizi meniul
//         header.classList.add('open');
//         fadeElems.forEach(function(element) {
//             element.classList.add('fade-in');
//             element.classList.remove('fade-out'); 
//         })
//     }
// });
