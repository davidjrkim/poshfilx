
var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        localStorage.removeItem('yes');
    } else {
        localStorage.setItem('yes', 'true');
    }
});