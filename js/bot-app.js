
// this code does not work on the top of the page in side the <head> so i'm putting this separately at the bottom XD some body pleace explain ㅠㅠ

var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        localStorage.removeItem('yes');
    } else {
        localStorage.setItem('yes', 'true');
    }
});