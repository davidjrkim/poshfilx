

var password;
var pass1="pjy020725";
var yes = localStorage.getItem('yes');

// password=prompt('암호 므야','');

if (password==pass1)
    alert('그래 박정영 어서와');
else
    {
    // location.reload();
    // window.location="https://www.instagram.com/pjy0_02/";
    }

if (yes !== 'true'){
    password=prompt('암호 므야','');
    }



if (password==pass1){
    localStorage.setItem('yes', "true");
}





var checkbox = document.querySelector("input[name=checkbox]");
    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            password=prompt('암호 므야','');
        } else {
            // Checkbox is not checked..
        }
    });

 