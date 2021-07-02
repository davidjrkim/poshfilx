var password;
var pass1 = "2482510@";
var yes = localStorage.getItem("yes");

if (yes !== "true") {
    password = prompt("암호 므야", "");

    if (password == pass1) {
        alert("어서 오십시오 (비번이 저장되었습니다)");
    } else {
        location.reload();
        // window.location="https://www.instagram.com/pjy0_02/";
    }

    if (password == pass1) {
        localStorage.setItem("yes", "true");
    }
}

