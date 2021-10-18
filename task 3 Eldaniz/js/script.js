let even = document.getElementsByName("even")[0];

even.addEventListener('keyup', function(e) {
    e.preventDefault();

    console.log(this.value);
});