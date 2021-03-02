// var listanum = document.getElementById("lista");

var numeridagenerare = parseInt(prompt("quanti numeri vuoi generare?"));
var generati = [];

if (!isNaN(numeridagenerare) ) {
  for (var i = 0; i < numeridagenerare; i++) {

    generati.push(i+1) ;


      if  (i % 3 == 0 && i % 5 == 0) {
        console.log("fixbuz");
        document.getElementById("lista").innerHTML += "<li>" +  "fixbuz" + "</li>";
      }

      else if (i%3 == 0) {
        console.log("fix");
        document.getElementById("lista").innerHTML += "<li>" + "fix" + "</li>";
      }

      else if (i%5== 0) {
        console.log("buzz");
        document.getElementById("lista").innerHTML += "<li>" + "buzz" + "</li>";
      }
      else {
        document.getElementById("lista").innerHTML += "<li>" + generati[i] + "</li>";
      }

    }
} else {
  alert("non hai digitato un numero");
  var numeridagenerare = parseInt(prompt("quanti numeri vuoi generare?"));
  for (var i = 0; i < numeridagenerare; i++) {

    generati.push(i+1) ;


      if  (i % 3 == 0 && i % 5 == 0) {
        console.log("fixbuz");
        document.getElementById("lista").innerHTML += "<li>" +  "fixbuz" + "</li>";
      }

      else if (i%3 == 0) {
        console.log("fix");
        document.getElementById("lista").innerHTML += "<li>" + "fix" + "</li>";
      }

      else if (i%5== 0) {
        console.log("buzz");
        document.getElementById("lista").innerHTML += "<li>" + "buzz" + "</li>";
      }
      else {
        document.getElementById("lista").innerHTML += "<li>" + generati[i] + "</li>";
      }

    }

}
    // console.log(generati);
