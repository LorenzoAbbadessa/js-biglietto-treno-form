//const KM = prompt("Quanti chilometri vorresti percorrere?")
//const età = prompt("Quanti anni hai?")
let KM;
let età;

document.getElementById("bottone").onclick = function(){
    età = document.getElementById("età").value;
    KM = document.getElementById("km").value;
    
    let prezzo = KM * (0.21);
    if ( età <= 18 ) {
        document.getElementById("titolo").innerHTML = (prezzo * 0.8).toFixed(2) ;
    } else if (età >= 65) {
        document.getElementById("titolo").innerHTML = (prezzo * 0.6).toFixed(2) ;
    }else {
        document.getElementById("titolo").innerHTML = (prezzo).toFixed(2)  ;
    }
    
    
}






