
// this code does not work on the top of the page in side the <head> so i'm putting this separately at the bottom XD some body pleace explain ㅠㅠ

var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        localStorage.removeItem('yes');
    } else {
        localStorage.setItem('yes', 'true');
    }
});

function cbclick(e){
    e = e || event;
    var cb = e.srcElement || e.target;
    if (cb.type !== 'checkbox') {return true;}
    var cbxs = document.getElementById('radiocb').getElementsByTagName('input'), i=cbxs.length;
     while(i--) {
         if (cbxs[i].type && cbxs[i].type == 'checkbox' && cbxs[i].id !== cb.id) {
          cbxs[i].checked = false;
         }
     }
     // if the click should always result in a checked checkbox 
     // unconmment this:
     // cb.checked = true;
 }