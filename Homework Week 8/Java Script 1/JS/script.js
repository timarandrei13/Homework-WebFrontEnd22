alert ("Page loading");

function test() {
    alert("Image clickMe");
}

function functiaLuiAndrei(nume) { 
    alert("Fa-ti tema Andrei!");
    alert("Sigur?" + nume);
    alert("Da!");
}

function arrayExample() {
    var fructe = ["mere", "pere", "nuci", "struguri", "gutui"];
  
    for (var index = 0; index < fructe.length; index = index + 2) {
      alert("Valoarea lui index este " + index);
      alert(fructe[index]);
    }
  
   
    var textulMeu = "ana are mere";
    alert("Lungimea textului meu este: " + textulMeu.length);
  }
  
  
  function sum() {
    var a = parseInt(document.getElement("valoareaLuiA").value);
    var b = parseInt(document.getElementById("valoareaLuiB").value);
    var sum = a + b;
  
    alert("Suma este: " + sum);
  }
  
  function letterCounter() {
    var text = document.getElementsByClassName("userInput")[0].value;
    var letterAOccurence = 0;
  
    for (var i = 0; i < text.length; i++) {
      if (text[i] == "a") {
        letterAOccurence = letterAOccurence + 1;
      }
    }
  
    alert("Your text: " + text + " has " + letterAOccurence + " letter(s) a");
    console.log("Number of a occurrence: " + letterAOccurence);
  }