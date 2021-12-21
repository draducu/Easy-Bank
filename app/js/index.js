const btnHamburger = document.querySelector("#btnHamburger").addEventListener("click", function() {
    console.log("works")
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    }
    else {
        btnHamburger.classList.add('open');
    }
});