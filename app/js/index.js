const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', function() {
    console.log("works")
    console.log(btnHamburger.classList);
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('.open');
    }
    else {
        btnHamburger.classList.add('open');
    }
});