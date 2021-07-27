// For

let ejFor = document.getElementById("ejFor");

const emergente = ()=>{
    for (let i = 0; i <3; i++) {
        alert("ESTO ES SPAM");
        window.open("google.com")
        
    }
}

ejFor.onclick = function () {
    emergente();
}
